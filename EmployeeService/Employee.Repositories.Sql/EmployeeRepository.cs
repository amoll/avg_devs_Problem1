using Employee.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Repositories.Sql
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeContext _context;

        public EmployeeRepository(EmployeeContext context)
        {
            _context = context;
        }
        public async Task<Models.Employee> GetEmployee(int id)
        {
            if (id == 0) return null;
            var emp = await _context.Departments.FirstOrDefaultAsync();
            if(emp == null) return null;
            return new Models.Employee { Id = emp.Id, Name = emp.DepartmentName };
        }

        public async Task<int> GetTeamCount(int employeeId)
        {
            if(employeeId == 0) return 0;
            var teamCount = 0;
            var manager = await _context.Employees.FirstOrDefaultAsync(e => e.Id.Equals(employeeId));
            if(manager == null) return teamCount;

            var oeCodes = await _context.OECodes.ToListAsync();
            var managerOECode = oeCodes.First(oe => oe.Id == manager.OECodeId);
            var team = new List<int>() { 1 };
            var managerIds = new List<int>() { manager.Id };
            while (team.Any())
            {
                var tempTeam = await _context.Employees.Where(e => managerIds.Contains(e.ManagerId.Value))
                                .Select(e1 => new { e1.Id, e1.ManagerId} ).ToListAsync();
                managerIds = tempTeam.Select(t => t.Id).Distinct().ToList();
                team = tempTeam.Select(e => e.Id).ToList();
                teamCount += tempTeam.Count;
            }

            return teamCount;
        }

        public async Task<IEnumerable<Team>> GetTopLevelEmployee()
        {
            var topLevelEmployees = await _context.Employees.Where(e => e.ManagerId == null).Select(e1 => new Team
            {
                EmployeeId = e1.Id,
                EmployeeName = e1.LastName + ", " + e1.LastName,
                ManagerId = e1.ManagerId,
                DepartmentId = e1.DepartmentId,
                OECodeId = e1.OECodeId
            }).ToListAsync();
            return topLevelEmployees;            
        }

        public async Task<Team> GetTeam(int employeeId)
        {
            if (employeeId == 0) return null;
            var teamCount = 0;
            var manager = await _context.Employees.FirstOrDefaultAsync(e => e.Id.Equals(employeeId));
            if (manager == null) return null;

            var employeeTeam = new Team
            {
                EmployeeId = manager.Id,
                EmployeeName = manager.LastName + ", " + manager.FirstName,
                DepartmentId = manager.DepartmentId,
                OECodeId = manager.OECodeId,
                ManagerId = manager.ManagerId
            };
            var team = new List<int>() { 1 };
            var managerIds = new List<int>() { manager.Id };
            while (team.Any())
            {
                var tempTeam = await _context.Employees.Where(e => managerIds.Contains(e.ManagerId.Value))
                                .Select(e1 => new Team
                                {
                                    EmployeeId = e1.Id,
                                    EmployeeName = e1.LastName + ", " + e1.FirstName,
                                    DepartmentId = e1.DepartmentId,
                                    OECodeId = e1.OECodeId,
                                    ManagerId = e1.ManagerId
                                }).ToListAsync();
                foreach (var managerId in managerIds)
                {
                    var emp = GetTeam(employeeTeam, managerId);
                    if(emp == null) continue;
                    emp.EmployeeTeam = tempTeam;
                }
                managerIds = tempTeam.Select(t => t.EmployeeId).Distinct().ToList();
                team = tempTeam.Select(e => e.EmployeeId).ToList();
                teamCount += tempTeam.Count;
            }

            return employeeTeam;
        }

        public async Task<IEnumerable<Department>> GetAllDepartments()
        {
            var departments = await _context.Departments.Select(d => new Models.Department
            {
                Id = d.Id,
                Code = d.DepartmentCode,
                Name = d.DepartmentName,
                Description = d.Description
            }).ToListAsync();
            return departments;
        }

        private Team GetTeam(Team team, int managerId)
        {
            if (team.EmployeeId == managerId) return team;
            foreach (var employeeTeam in team.EmployeeTeam)
            {
                if(employeeTeam.EmployeeId == managerId) return employeeTeam;
                return GetTeam(employeeTeam, managerId);
            }

            return null;
        }
    }
}
