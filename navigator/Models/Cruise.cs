using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace navigator.Models
{
    public class Cruise : CommonModel
    {
        public string Name { get; set; }
        public string Price { get; set; }
        public string Conditions { get; set; }
        public string Duration { get; set; }
        public string Url { get; set; }
    }
}
