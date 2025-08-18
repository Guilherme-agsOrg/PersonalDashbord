namespace back.Domain.User.Dto;

public class AuthResponse
{
    public required string AccessToken { get; set; }
    public required string RefreshToken { get; set; }
    public required string Email { get; set; }
    public required string Name { get; set; }
}