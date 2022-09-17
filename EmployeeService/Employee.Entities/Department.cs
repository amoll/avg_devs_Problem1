using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Entities
{
    public class Department
    {
        public int Id { get; set; }
        public string? DepartmentName { get; set; }
        public string? DepartmentCode { get; set; }
        public string? Description { get; set; }

    }
}
