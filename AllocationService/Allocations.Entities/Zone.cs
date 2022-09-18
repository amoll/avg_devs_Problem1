using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Entities
{
    public class Zone
    {
        public int Id { get; set; }

        public string? ZoneName { get; set; }
        public int? FloorId { get; set; }

        [ForeignKey("FloorId")]
        public Floor? Floor { get; set; }

        public virtual List<Desk> Desks { get; set; } = new List<Desk>();
    }
}
