using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace navigator.Models
{
    public class Tour : CommonModel
    {
        public string Name { get; set; }
        public string Price { get; set; }
        public string Conditions { get; set; }
        public string Duration { get; set; }
        public string Url { get; set; }

        [ForeignKey("Country")]
        public Guid CountryId { get; set; }
        public virtual Country Country { get; set; }
    }
}
