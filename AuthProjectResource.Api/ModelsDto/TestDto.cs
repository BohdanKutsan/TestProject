﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestProjectResource.Api.Models;

namespace TestProjectResource.Api.ModelsDto
{
    public class TestDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<Question> Questions { get; set; } = new List<Question>();
        public List<Answer> Answers { get; set; } = new List<Answer>();
    }
}
