using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Models
{
    public class Allocation
    {
        public int AllocatedByEmpId { get; set; }
        public int AllocatedToEmpId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int[] Desks { get; set; }

    }
}
