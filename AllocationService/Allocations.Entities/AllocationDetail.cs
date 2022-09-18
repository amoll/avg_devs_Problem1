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
        public int? AllocationId { get; set; }
        public int? DeskId { get; set; }

    }
}
