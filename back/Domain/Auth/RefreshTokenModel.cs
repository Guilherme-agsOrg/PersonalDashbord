using System.ComponentModel.DataAnnotations;

namespace back.Domain.Auth
{
    public class RefreshToken
    {
        public long Id { get; set; }
        [MaxLength(100)]
        public required string Token { get; set; }
        public required DateTimeOffset Expires { get; set; }
        public required bool IsRevoked { get; set; }
        public required long UserId { get; set; }
        public required User.User User { get; set; }
    }
}