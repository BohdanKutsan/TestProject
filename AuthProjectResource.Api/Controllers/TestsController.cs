using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestProject.AuthApi.Models;
using TestProjectResource.Api.Models;
using TestProjectResource.Api.ModelsDto;

namespace TestProjectResource.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestsController : ControllerBase
    {
        private ApplicationResourceContext db;

        public TestsController(ApplicationResourceContext context)
        {
            db = context;
        }

        // GET: api/<Test>
        [Authorize]
        [HttpGet("GetTests")]
        public async Task<ActionResult<IEnumerable<Test>>> GetTests()
        {
            return await db.Tests.ToListAsync();
        }

        // GET api/<Test>/5
        [Authorize]
        [HttpGet("get/{id}")]
        public async Task<ActionResult<TestDto>> Get(int id)
        {
            TestDto testDto = new TestDto();
            Test test = await db.Tests.FirstOrDefaultAsync(x => x.Id == id);
            testDto.Id = id;
            testDto.Title = test.Title;
            testDto.Questions = db.Questions.Where(q => q.TestId == id).ToList();
            testDto.Answers = db.Answers.Where(a => a.TestId == id).ToList();       

            if (testDto == null)
                return NotFound();
            return new ObjectResult(testDto);
        }

        // POST api/<Test>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<Test>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<Test>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
