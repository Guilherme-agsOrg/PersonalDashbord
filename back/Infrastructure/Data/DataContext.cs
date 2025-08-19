using Microsoft.EntityFrameworkCore;
using back.Domain.Auth;
using back.Domain.User;

namespace back.Infrastructure.Data;

public class DataContext(DbContextOptions<DataContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }
    public DbSet<RefreshToken> RefreshTokens { get; set; }
}

