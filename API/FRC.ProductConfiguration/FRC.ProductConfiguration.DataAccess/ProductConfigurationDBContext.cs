using FRC.ProductConfiguration.Entities.Configurations;
using FRC.ProductConfiguration.Entities.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRC.ProductConfiguration.DataAccess
{
    public class ProductConfigurationDBContext : DbContext
    {
        public DbSet<OfferPriceMap> OfferPriceMaps { get; set; }
        public DbSet<TwoTier> TwoTiers { get; set; }
        public DbSet<TimeOfUse> TimeOfUses { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Configurations.Add(new OfferPriceMapConfiguration());
            modelBuilder.Configurations.Add(new TwoTierConfiguration());
            modelBuilder.Configurations.Add(new TimeOfUseConfiguration());
        }
    }
}
