using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace navigator.Models
{
    public class Country : CommonModel
    {
        public string Name { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public bool IsHot { get; set; } = false;
        public double Rating { get; set; } = 0;

        [ForeignKey("Region")]
        public Guid RegionId { get; set; }
        public virtual Region Region { get; set; }

        public virtual ICollection<Tour> Tours { get; set; }
        public virtual ICollection<Hotel> Hotels { get; set; }
    }
}
