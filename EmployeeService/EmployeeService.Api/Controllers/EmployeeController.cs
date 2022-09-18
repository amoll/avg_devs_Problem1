using Employee.Models;
using Employee.Repositories;
using EmployeeService.Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EmployeeService.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private const int MAX_ALLOCATIONS_PERCENTAGE = 65;

        private readonly ILogger<EmployeeController> _logger;
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(ILogger<EmployeeController> logger
            , IEmployeeRepository employeeRepository)
        {
            _logger = logger;
            _employeeRepository = employeeRepository;
        }

        // GET: api/<EmployeeController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{id}/Team/Count")]
        public async Task<TeamCountResponse> GetTeamCount(int id)
        {
            var teamCount = await _employeeRepository.GetTeamCount(id);
            return new TeamCountResponse { TeamCount = teamCount, MaxAllowedSeatAllocation = teamCount * MAX_ALLOCATIONS_PERCENTAGE / 100 };
        }

        [HttpGet("{id}/Team")]
        public async Task<Team> GetTeam(int id)
        {
            var team = await _employeeRepository.GetTeam(id);
            return team;
        }

        [HttpGet("Admin")]
        public async Task<IEnumerable<Team>> GetTopLevelEmployees(int id)
        {
            var topLevelEmployees = await _employeeRepository.GetTopLevelEmployee();
            return topLevelEmployees;
        }
    }
}
