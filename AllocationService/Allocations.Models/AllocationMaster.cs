﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Models
{
    public class AllocationMaster
    {
        public int Id { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }
        public int? AllocatedBy { get; set; }
        public int? AllocatedTo { get; set; }
    }
}
