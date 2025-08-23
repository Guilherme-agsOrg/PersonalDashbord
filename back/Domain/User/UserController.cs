using back.Domain.User.Dto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace back.Domain.User;

[ApiController]
[Route("users")]
public class UserController(IUserService userService) : ControllerBase
{

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        var response = await userService.RegisterAsync(request);
        
        Response.Cookies.Append("accessToken", response.AccessToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = true, // Use true in production (HTTPS)
            SameSite = SameSiteMode.Strict,
            Expires = DateTime.UtcNow.AddMinutes(15) // Put the expiration time from token
        });
        
        Response.Cookies.Append("refreshToken", response.RefreshToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = true, // Use true em produção (HTTPS)
            SameSite = SameSiteMode.Strict,
            Expires = DateTime.UtcNow.AddDays(7) // Put the expiration time from token
        });
        
        return Ok( new {response.Email, response.Name});
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var response = await userService.LoginAsync(request);
        
        Response.Cookies.Append("accessToken", response.AccessToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = true, // Use true in production (HTTPS)
            SameSite = SameSiteMode.Strict,
            Expires = DateTime.UtcNow.AddMinutes(15) // Put the expiration time from token
        });
        
        Response.Cookies.Append("refreshToken", response.RefreshToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = true, // Use true em produção (HTTPS)
            SameSite = SameSiteMode.Strict,
            Expires = DateTime.UtcNow.AddDays(7) // Put the expiration time from token
        });
        
        return Ok( new {response.Email, response.Name});
    }

    [HttpPost("refresh")]
    public async Task<IActionResult> Refresh([FromBody] string refreshToken)
    {
        var response = await userService.RefreshTokenAsync(refreshToken);
        
        Response.Cookies.Append("accessToken", response.AccessToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = true, // Use true in production (HTTPS)
            SameSite = SameSiteMode.Strict,
            Expires = DateTime.UtcNow.AddMinutes(15) // Put the expiration time from token
        });
        
        Response.Cookies.Append("refreshToken", response.RefreshToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = true, // Use true em produção (HTTPS)
            SameSite = SameSiteMode.Strict,
            Expires = DateTime.UtcNow.AddDays(7) // Put the expiration time from token
        });
        
        return Ok( new {response.Email, response.Name});
    }

    [Authorize]
    [HttpPost("logout")]
    public async Task<IActionResult> Logout([FromBody] string refreshToken)
    {
        await userService.LogoutAsync(refreshToken);
        return NoContent();
    }

    [Authorize]
    [HttpGet("me")]
    public IActionResult Me()
    {
        var email = User.Identity?.Name;
        return Ok(new { Email = email });
    }
}