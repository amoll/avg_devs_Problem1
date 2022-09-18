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
        Task<int> AddAllocation(Allocation allocation);
        Task<IEnumerable<Location>> GetAllLocations();
        Task<IEnumerable<AllocationMaster>> GetAllocationsByEmployee(int employeeId, bool includeDetails = false);
        Task<Location> GetLocationDetail(int locationId);
        Task<Location> GetLocationDetail(int locationId, int employeeId);
    }
}
