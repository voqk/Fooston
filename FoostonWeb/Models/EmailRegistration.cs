using System.ComponentModel.DataAnnotations;

namespace FoostonWeb.Models
{
    public class EmailRegistration
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}