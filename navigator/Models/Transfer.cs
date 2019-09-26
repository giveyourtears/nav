using System;
namespace navigator.Models
{
    public class Transfer : CommonModel
    {
        public string Description { get; set; }
        public string PriceMoscow { get; set; }
        public string PriceTwoMoscow { get; set; }
        public string PriceKiev { get; set; }
        public string PriceTwoKiev { get; set; }
    }
}
