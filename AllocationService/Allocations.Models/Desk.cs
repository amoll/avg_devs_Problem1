﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Models
{
    public class Desk
    {
        public int Id { get; set; }
        public string? DeskNo { get; set; }
        public string? Description { get; set; }
        public int? ZoneId { get; set; }

    }
}