using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Models
{
    public class Team
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public int? DepartmentId { get; set; }
        public int? OECodeId { get; set; }
        public int? ManagerId { get; set; }
        public List<Team> EmployeeTeam { get; set; } = new List<Team>();
    }
}
