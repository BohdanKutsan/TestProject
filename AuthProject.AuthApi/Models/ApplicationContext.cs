using AuthProject.AuthApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestProject.AuthApi.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
       
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasData(
                new Role[]
                {
                    new Role {RoleId = 1, NameRole = "Admin"},
                    new Role {RoleId = 2, NameRole = "User"},
                }
                );

            modelBuilder.Entity<User>().HasData(
                new User[]
                {
                new User { Id=1, Email = "K_B_O@ukr.net", Password = "K_B_O@ukr.net", RoleId = 1 },
                }
                );
        }
    }
}
