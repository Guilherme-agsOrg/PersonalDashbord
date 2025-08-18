namespace back.Domain.User
{
    public interface IUserRepository
    {
        Task<User?> GetByEmailAsync(string email);
        Task<User?> GetByIdAsync(long id);
        Task AddAsync(User user);
        Task SaveChangesAsync();
    }
}
