using back.Auth;

namespace back.Domain.User;

public class User
{
    public long Id { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Name { get; set; }
    public List<RefreshToken> RefreshTokens { get; set; }
}
