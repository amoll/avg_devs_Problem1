using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Models
{
    public class OECode
    {
        public int Id { get; set; }
        public string Level { get; set; }
        public string Code { get; set; }
        public int ParentOECode { get; set; }
        public int DepartmentId { get; set; }

    }
}
