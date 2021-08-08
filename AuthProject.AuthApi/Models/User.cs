using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthProject.AuthApi.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Role Role { get; set; }
        public int RoleId { get; set; }

    }
    public class Role
    {
        public int RoleId { get; set; }
        public string NameRole { get; set; }
        public List<User> Users { get; set; } = new List<User>();
    }

    public enum Roles
    {
        User,
        Admin
    }
}
