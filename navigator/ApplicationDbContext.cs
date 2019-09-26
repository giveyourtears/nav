using navigator.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace navigator.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Region> Regions { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<Cruise> Cruises { get; set; }
        public DbSet<Tour> Tours { get; set; }
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Cruises> CruisesPage { get; set; }
        public DbSet<About> AboutPage { get; set; }
        public DbSet<Insurance> InsurancePage { get; set; }
        public DbSet<Transfer> TransferPage { get; set; }
        public DbSet<Visa> VisaPage { get; set; }
    }
}