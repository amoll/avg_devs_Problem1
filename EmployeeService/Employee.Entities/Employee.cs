using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Entities
{
    public class Employee
    {
        [NotNull]
        public int Id { get; set; } = 0;
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int? DepartmentId { get; set; }
        public int? OECodeId { get; set; }
        public int? ManagerId { get; set; }

        [ForeignKey("DepartmentId")]
        public Department? Department { get; set; }
        [ForeignKey("OECodeId")]
        public OECode? OECode { get; set; }
        [ForeignKey("ManagerId")]
        public Employee? Manager { get; set; }
    }
}
