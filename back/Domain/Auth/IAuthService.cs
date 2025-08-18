namespace back.Domain.Auth
{
    public interface IAuthService
    {
        string GenerateAccessToken(User.User user);
        string GenerateRefreshToken();
    }
}