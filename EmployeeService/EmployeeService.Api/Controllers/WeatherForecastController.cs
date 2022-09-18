using Employee.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeService.Api.Controllers
{

    //IGNORE THIS CLASS. THIS IS TEST CLASS
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IEmployeeRepository _employeeRepository;

        public WeatherForecastController(ILogger<WeatherForecastController> logger
            , IEmployeeRepository employeeRepository)
        {
            _logger = logger;
            _employeeRepository = employeeRepository;
        }

        //IGNORE THIS CLASS. THIS IS TEST CLASS
        [HttpGet]
        public async Task<IEnumerable<WeatherForecast>> Get()
        {
            var test = await _employeeRepository.GetEmployee(1);
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}