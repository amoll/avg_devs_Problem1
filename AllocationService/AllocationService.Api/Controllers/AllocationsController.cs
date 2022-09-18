using Allocations.Models;
using Allocations.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AllocationService.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllocationsController : ControllerBase
    {
        private readonly ILogger<AllocationsController> _logger;
        private readonly IAllocationRepository _allocationRepository;

        public AllocationsController(ILogger<AllocationsController> logger
            , IAllocationRepository allocationRepository)
        {
            _logger = logger;
            _allocationRepository = allocationRepository;
        }
        // GET: api/<AllocationsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AllocationsController>/locations
        [HttpGet("locations")]
        public async Task<IEnumerable<Location>> GetAllLocations()
        {
            var locations = await _allocationRepository.GetAllLocations();
            return locations;
        }

        [HttpGet("locations/{id}")]
        public async Task<Location> GetLocation(int id)
        {
            var location = await _allocationRepository.GetLocationDetail(id);
            return location;
        }

        [HttpGet("locations/{id}/Employee/{employeeId}")]
        public async Task<Location> GetLocation(int id, int employeeId)
        {
            var location = await _allocationRepository.GetLocationDetail(id, employeeId);
            return location;
        }

        [HttpGet("{id}")]
        public async Task<IEnumerable<AllocationMaster>> GetAllocations(int id)
        {
            var allocations = await _allocationRepository.GetAllocationsByEmployee(id);
            return allocations;
        }

        [HttpGet("{id}/details")]
        public async Task<IEnumerable<AllocationMaster>> GetAllocationDetails(int id)
        {
            var allocations = await _allocationRepository.GetAllocationsByEmployee(id);
            return allocations;
        }

        // POST api/<AllocationsController>
        [HttpPost]
        public async Task<int> Post([FromBody] Allocation allocation)
        {
            var allocationId = await _allocationRepository.AddAllocation(allocation);
            return allocationId;
        }
    }
}
