using back.Domain.Auth;
using back.Domain.User.Dto;
using Microsoft.AspNetCore.Identity;

namespace back.Domain.User;

public class UserService(IUserRepository userRepository, IAuthService authService, IAuthRepository authRepository, IPasswordHasher<User> passwordHasher) : IUserService
{
    public async Task<AuthResponse> RegisterAsync(RegisterRequest request)
    {
        var existingUser = await userRepository.GetByEmailAsync(request.Email);
        
        if (existingUser != null)
            throw new Exception("E-mail already exists.");

        var user = new User
        {
            Email = request.Email,
            Name = request.Name
        };

        user.Password = passwordHasher.HashPassword(user, request.Password);
        await userRepository.AddAsync(user);
        await userRepository.SaveChangesAsync();

        return await GenerateTokensAsync(user);
    }

    public async Task<AuthResponse> LoginAsync(LoginRequest request)
    {
        var user = await userRepository.GetByEmailAsync(request.Email);
        
        if (user == null)
            throw new Exception("User not found.");

        var result = passwordHasher.VerifyHashedPassword(user, user.Password, request.Password);
        if (result == PasswordVerificationResult.Failed)
            throw new Exception("Password invalid.");

        return await GenerateTokensAsync(user);
    }
    
    public async Task LogoutAsync(string refreshToken)
    {
        var token = await authRepository.GetAsync(refreshToken);
        if (token != null)
        {
            token.IsRevoked = true;
            authRepository.Update(token);
            await authRepository.SaveChangesAsync();
        }
    }
    
    public async Task<AuthResponse> RefreshTokenAsync(string refreshToken)
    {
        var token = await authRepository.GetAsync(refreshToken);
        if (token == null || token.IsRevoked || token.Expires < DateTime.UtcNow)
            throw new Exception("Refresh token invalid");

        var user = await userRepository.GetByIdAsync(token.UserId);
        if (user == null)
            throw new Exception("User not found");

        token.IsRevoked = true;
        authRepository.Update(token);
        await authRepository.SaveChangesAsync();

        return await GenerateTokensAsync(user);
    }

    private async Task<AuthResponse> GenerateTokensAsync(User user)
    {
        var accessToken = authService.GenerateAccessToken(user);
        var refreshToken = authService.GenerateRefreshToken();

        var tokenModel = new RefreshToken
        {
            Token = refreshToken,
            UserId = user.Id,
            Expires = DateTime.UtcNow.AddDays(7),
            IsRevoked = false,
            User = user
        };

        await authRepository.AddAsync(tokenModel);
        await authRepository.SaveChangesAsync();

        return new AuthResponse
        {
            AccessToken = accessToken,
            RefreshToken = refreshToken,
            Email = user.Email,
            Name = user.Name
        };
    }
}