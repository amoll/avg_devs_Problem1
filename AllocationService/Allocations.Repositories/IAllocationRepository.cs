using Allocations.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Repositories
{
    public interface IAllocationRepository
    {
        Task<IEnumerable<Location>> GetAllLocations();
        Task<Models.AllocationDetail> GetAllocation(int id);
        Task<Location> GetLocationDetail(int locationId);
    }
}
