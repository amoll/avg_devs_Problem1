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

            //var team = await _context.Employees.Where(e => e.ManagerId == employeeId)
            //                .SelectMany(empN2 => _context.Employees.Where(empN3 => empN3.ManagerId == empN2.Id).DefaultIfEmpty())
            //                .CountAsync();
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
            //var team = await _context.Employees.Include(e => e.Manager)
            //                .Where(e => e.ManagerId == employeeId)
            //                .SelectMany(e => e)

            //var myTeamCount = await (from empN1 in _context.Employees
            //           join empN2 in _context.Employees on empN1.Id equals empN2.ManagerId
            //           join empN3 in _context.Employees on empN2.Id equals empN3.ManagerId
            //           where empN1.Id == employeeId
            //           select empN3).CountAsync();
            //return myTeamCount;
        }
    }
}
