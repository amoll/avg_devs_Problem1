using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Entities
{
    public class AllocationMaster
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int? AllocatedByEmpId { get; set; }
        public int? AllocatedToEmpId { get; set; }

        public virtual List<AllocationDetail> AllocationDetails { get; set; } = new List<AllocationDetail>();
    }
}
