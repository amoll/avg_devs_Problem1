using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Models
{
    public class AllocationMaster
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int? AllocatedBy { get; set; }
        public int? AllocatedTo { get; set; }
        public List<AllocationDetail>? AllocationDetails { get; set; } = new List<AllocationDetail>();
    }
}
