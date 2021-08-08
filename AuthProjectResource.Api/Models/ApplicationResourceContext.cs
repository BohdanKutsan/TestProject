using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestProjectResource.Api.Models
{
    public class ApplicationResourceContext : DbContext
    {
        public DbSet<Test> Tests { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        public ApplicationResourceContext(DbContextOptions<ApplicationResourceContext> options)
           : base(options)
        {
            Database.EnsureCreated();
        }
    }
    
}
