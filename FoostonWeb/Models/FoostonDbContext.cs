using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using FoostonWeb.Models;

namespace FoostonWeb.Models
{
    public class FoostonDbContext : IdentityDbContext<ApplicationUser>
    {
        public FoostonDbContext(DbContextOptions<FoostonDbContext> contextOptions) : base(contextOptions)
        {
        }

        public DbSet<Standing> Standings { get; set; }
        public DbSet<EmailRegistration> EmailRegistrations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Standing>(standing => {
                standing.HasIndex(s => s.TimeStamp);
                standing.HasIndex(s => s.Name);

                standing.Property(s => s.Name).IsRequired();
                standing.Property(s => s.Rank).IsRequired();
                standing.Property(s => s.Rating).IsRequired();
            });

            modelBuilder.Entity<EmailRegistration>(registration => {
                registration.Property(r => r.Name).IsRequired();
                registration.Property(r => r.Email).IsRequired();
            });
        }        
    }
}