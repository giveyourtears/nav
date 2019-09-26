using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace navigator.Models
{
    public class Cruises : CommonModel
    {
        public string Name { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }

    }
}