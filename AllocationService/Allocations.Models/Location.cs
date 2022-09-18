using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Models
{
    public class Location
    {
        public int Id { get; set; }
        public string? LocationName { get; set; }
        public string? Description { get; set; }
        public List<Floor> Floors { get; set; } = new List<Floor>();
    }
}
