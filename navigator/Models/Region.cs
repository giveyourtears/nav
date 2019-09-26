using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace navigator.Models
{
    public class Region : CommonModel
    {
        public string Name { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        [NotMapped]
        public IFormFile Images { get; set; }


        public virtual ICollection<Country> Countries { get; set; }
    }
}