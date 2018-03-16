using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRC.ProductConfiguration.Entities.ViewModels
{
    public class OfferPriceMapViewModel : BaseViewModel
    {
        public int? Year { get; set; }
        public int? Month { get; set; }
        public decimal? mth3 { get; set; }
        public decimal? mth6 { get; set; }
        public decimal? mth12 { get; set; }
        public decimal? mth18 { get; set; }
        public decimal? mth24 { get; set; }
        public decimal? mth3OP { get; set; }
        public decimal? mth3P { get; set; }
        public decimal? mth6OP { get; set; }
        public decimal? mth6P { get; set; }
        public decimal? mth12OP { get; set; }
        public decimal? mth12P { get; set; }
        public decimal? mth18OP { get; set; }
        public decimal? mth18P { get; set; }
        public decimal? mth24OP { get; set; }
        public decimal? mth24P { get; set; }
    }
}
