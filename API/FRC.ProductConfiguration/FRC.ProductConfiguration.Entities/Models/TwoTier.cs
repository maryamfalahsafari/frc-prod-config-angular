using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRC.ProductConfiguration.Entities.Models
{
    public class TwoTier
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public string Duration { get; set; }
        public string TierKind { get; set; }
        public int Value { get; set; }
        public string Type { get; set; }
    }
}
