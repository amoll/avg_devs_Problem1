using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Models
{
    public class Zone
    {
        public int Id { get; set; }

        public string? ZoneName { get; set; }
        public int? FloorId { get; set; }
        public List<Desk> Desks { get; set; } = new List<Desk>();
    }
}
