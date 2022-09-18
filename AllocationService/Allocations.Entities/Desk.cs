using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Entities
{
    public class Desk
    {
        public int Id { get; set; }
        public string? DeskNo { get; set; }
        public string? Description { get; set; }
        public int? ZoneId { get; set; }

        [ForeignKey("ZoneId")]
        public Zone? Zone { get; set; }

    }
}
