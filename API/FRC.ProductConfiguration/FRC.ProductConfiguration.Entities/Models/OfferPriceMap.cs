using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRC.ProductConfiguration.Entities.Models
{
    public class OfferPriceMap
    {
        public int Id { get; set; }
        public DateTime? EffectiveDate { get; set; }
        public int? Year { get; set; }
        public int? Month { get; set; }
        public string Duration { get; set; }
        public decimal? Value { get; set; }
        public string Type { get; set; }
        public string TierKind { get; set; }
        public string PlanCode { get; set; }

    }
}
