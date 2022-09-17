using Employee.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Repositories.Sql
{
    public partial class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {
            
        }

        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<OECode> OECodes { get; set; }
        public virtual DbSet<Entities.Employee> Employees { get; set; }

    }
}
