using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Entities
{
    public class AllocationDetail
    {
        public int Id { get; set; }
        public int? AllocationMasterId { get; set; }
        public int? DeskId { get; set; }

        public virtual AllocationMaster AllocationMaster { get; set; } = new AllocationMaster();
        public virtual Desk? Desk { get; set; }

    }
}
