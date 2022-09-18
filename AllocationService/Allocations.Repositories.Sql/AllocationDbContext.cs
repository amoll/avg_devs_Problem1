using Allocations.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Repositories.Sql
{
    public class AllocationDbContext : DbContext
    {
        public AllocationDbContext(DbContextOptions<AllocationDbContext> options) : base(options)
        {

        }

        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Floor> Floors { get; set; }
        public virtual DbSet<Zone> Zones { get; set; }
        public virtual DbSet<Desk> Desks { get; set; }

    }
}
