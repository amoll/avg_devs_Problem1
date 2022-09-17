using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Employee.Models;
using Employee.Entities;

namespace Employee.Repositories
{
    public interface IEmployeeRepository
    {
        public Task<Models.Employee> GetEmployee(int id);
        Task<int> GetTeamCount(int employeeId);
    }
}
