using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestProjectResource.Api.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int TestId { get; set; }
        public Test Test { get; set; }
        public List<Answer> Answer { get; set; } = new List<Answer>();
    }
}
