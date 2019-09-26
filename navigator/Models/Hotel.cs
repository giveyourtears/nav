using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace navigator.Models
{
    public class Hotel : CommonModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }

        [ForeignKey("Country")]
        public Guid CountryId { get; set; }
        public virtual Country Country { get; set; }
    }
}
