using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RGA.Models
{
    public class Person
    {
        public string Name { get; set; }

        public List<int> HeartBeats { get; set; }

        public List<int> WalkingDistances { get; set; }

        public List<int> RunningDistances { get; set; }
    }
}