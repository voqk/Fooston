using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoostonWeb.Controllers
{
    [Route("api/[controller]")]
    public class MatchController: Controller
    {
        private readonly FoostonContext _context;
        
        public MatchController(FoostonContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public async Task<IEnumerable<Match>> GetAll() => await _context.Matches.ToListAsync();
    }
}