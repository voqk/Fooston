using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoostonWeb.Controllers
{
    [Route("api/[controller]")]
    public class PlayersController : Controller
    {
        private readonly FoostonContext _context;

        public PlayersController(FoostonContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public async Task<IEnumerable<Player>> GetAll()
        {
            return await _context.Players.Include(p => p.TeamMemberships).ThenInclude(m => m.Team).ToListAsync();
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Player player)
        {
            if (player == null)
            {
                return BadRequest();
            }

            _context.Players.Add(player);
            await _context.SaveChangesAsync();

            return CreatedAtRoute("GetPlayer", new { id = player.Id }, player);
        }

        [HttpGet("{id}", Name = "GetPlayer")]
        public async Task<IActionResult> Read(int id)
        {
            var player = await _context.Players.FirstOrDefaultAsync(p => p.Id == id);
            if (player == null)
            {
                return NotFound();
            }

            return new ObjectResult(player);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Player player)
        {
            if (player == null)
            {
                return BadRequest();
            }

            _context.Players.Update(player);
            await _context.SaveChangesAsync();
            
            return CreatedAtRoute("GetPlayer", new { id = player.Id }, player);
        }
    }
}