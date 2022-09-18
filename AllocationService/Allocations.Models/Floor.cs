using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Models
{
    public class Floor
    {
        public int Id { get; set; }
        public string? FloorName { get; set; }
        public int? LocationId { get; set; }
        public List<Zone> Zones { get; set; } = new List<Zone>();
    }
}
