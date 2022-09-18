using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Entities
{
    public class Floor
    {
        public int Id { get; set; }
        public string? FloorName { get; set; }
        public int? LocationId { get; set; }

        [ForeignKey("LocationId")]
        public Location? Location { get; set; }

        public virtual List<Zone> Zones { get; set; } = new List<Zone>();


    }
}
