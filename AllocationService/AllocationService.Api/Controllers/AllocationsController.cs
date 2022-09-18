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

        // GET api/<AllocationsController>/5
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

        // GET api/<AllocationsController>/5
        [HttpGet("{id}")]
        public async Task<string> Get(int id)
        {
            var v = await _allocationRepository.GetAllocation(id);
            return "value";
        }

        // POST api/<AllocationsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AllocationsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AllocationsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
