using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;
using FoostonWeb.Models;

namespace FoostonWeb.Models
{
    public class FoostonContext : DbContext
    {
        public FoostonContext(DbContextOptions<FoostonContext> contextOptions) : base(contextOptions)
        {
        }

        public DbSet<Standing> Standings { get; set; }
        public DbSet<EmailRegistration> EmailRegistrations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
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