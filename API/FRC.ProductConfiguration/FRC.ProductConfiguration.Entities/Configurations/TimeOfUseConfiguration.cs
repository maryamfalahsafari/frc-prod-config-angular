using FRC.ProductConfiguration.Entities.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRC.ProductConfiguration.Entities.Configurations
{
    public class TimeOfUseConfiguration : EntityTypeConfiguration<TimeOfUse>
    {
        public TimeOfUseConfiguration()
        {
            ToTable("TimeOfUses");
            HasKey(c => c.Id);
            Property(c => c.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
        }
    }
}
