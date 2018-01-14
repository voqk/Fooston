using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;

namespace FoostonWeb
{
    public class FoostonContext : DbContext
    {
        public FoostonContext(DbContextOptions<FoostonContext> contextOptions) : base(contextOptions)
        {
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<Membership> Memberships { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Membership>()
                .HasKey(m => new { m.PlayerId, m.TeamId });

            modelBuilder.Entity<Membership>()
                .HasOne(m => m.Player)
                .WithMany(p => p.TeamMemberships)
                .HasForeignKey(m => m.PlayerId);

            modelBuilder.Entity<Membership>()
                .HasOne(m => m.Team)
                .WithMany(t => t.Members)
                .HasForeignKey(m => m.TeamId);

            modelBuilder.Entity<Player>()
                .Property(p => p.Name)
                .IsRequired();

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("User ID=hunter;Password=Paul501;Host=localhost;Port=5432;Database=Fooston;");
        }
    }

    public class Player
    {
        public Player()
        {
            TeamMemberships = new List<Membership>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public List<Membership> TeamMemberships { get; set; }
    }

    public class Team
    {
        public Team()
        {
            Members = new List<Membership>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public List<Membership> Members { get; set; }
    }

    public class Membership
    {
        public int PlayerId { get; set; }
        public Player Player { get; set; }

        public int TeamId { get; set; }
        public Team Team { get; set; }
    }

    public class Match
    {
        public int Id { get; set; }

        public DateTimeOffset StartTime { get; set; }

        public int HomeTeamId { get; set; }
        public Team HomeTeam { get; set; }
        public int HomeTeamScore { get; set; }

        public int AwayTeamId { get; set; }
        public Team AwayTeam { get; set; }
        public int AwayTeamScore { get; set; }
    }
}