using back.Domain.Auth;
using back.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace back.Infrastructure.Repository
{
    public class AuthRepository(DataContext dataContext) : IAuthRepository
    {
        public async Task AddAsync(RefreshToken refreshToken)
        {
            await dataContext.RefreshTokens.AddAsync(refreshToken);
        }

        public void Update(RefreshToken refreshToken)
        {
            dataContext.RefreshTokens.Update(refreshToken);
        }

        public async Task<RefreshToken?> GetAsync(string refreshToken)
        {
            return await dataContext.RefreshTokens.FirstOrDefaultAsync(rt => rt.Token == refreshToken);
        }

        public async Task SaveChangesAsync()
        {
            await dataContext.SaveChangesAsync();
        }
    }
}
