using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Entities
{
    public class OECode
    {
        public int Id { get; set; }
        public string? OECodeLevel { get; set; }
        public string? Code { get; set; }
        public int? ParentOECodeId { get; set; }
        public int? DepartmentId { get; set; }

        [ForeignKey("ParentOECodeId")]
        public OECode? ParentOECode { get; set; }
        [ForeignKey("DepartmentId")]
        public Department? Department { get; set; }

    }
}
