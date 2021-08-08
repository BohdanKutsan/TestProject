using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestProjectResource.Api.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public bool IsTrue { get; set; }
        public Question Question { get; set; }
        public int QuestionId { get; set; }

        public int TestId { get; set; }

        
    }
}
