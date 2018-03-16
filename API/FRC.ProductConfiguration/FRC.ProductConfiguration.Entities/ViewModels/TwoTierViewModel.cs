using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRC.ProductConfiguration.Entities.ViewModels
{
    public class TwoTierViewModel : BaseViewModel
    {
        public string Date_ { get; set; }
        public int? mth6OP { get; set; }
        public int? mth6P { get; set; }
        public int? mth12OP { get; set; }
        public int? mth12P { get; set; }
        public int? mth18OP { get; set; }
        public int? mth18P { get; set; }
        public int? mth24OP { get; set; }
        public int? mth24P { get; set; }
    }
}
