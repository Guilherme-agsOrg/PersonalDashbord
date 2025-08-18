using back.Domain.User;
using back.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace back.Infrastructure.Repository
{
    public class UserRepository(DataContext dataContext) : IUserRepository
    {
        public async Task<User?> GetByEmailAsync(string email)
        {
            return await dataContext.Users.FirstOrDefaultAsync(u => u.Email == email);
        }
        
        public async Task<User?> GetByIdAsync(long id)
        {
            return await dataContext.Users.FirstOrDefaultAsync(u => u.Id == id);
        }

        public async Task AddAsync(User user)
        {
            await dataContext.Users.AddAsync(user);
        }

        public async Task SaveChangesAsync()
        {
            await dataContext.SaveChangesAsync();
        }
    }
}
