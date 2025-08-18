namespace back.Domain.Auth;

public interface IAuthRepository
{
    Task AddAsync(RefreshToken refreshToken);
    void Update(RefreshToken refreshToken);
    Task<RefreshToken?> GetAsync(string refreshToken);
    Task SaveChangesAsync();
}