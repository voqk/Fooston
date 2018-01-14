using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoostonWeb.Controllers
{
    [Route("api/[controller]")]
    public class TeamsController : Controller
    {
        private readonly FoostonContext _context;

        public TeamsController(FoostonContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public async Task<IEnumerable<Team>> GetAll() => await _context.Teams.Include(t => t.Members).ThenInclude(m => m.Player).ToListAsync();

        [HttpGet("{id}", Name = "GetTeam")]
        public async Task<IActionResult> GetById(int id)
        {
            var team = await _context.Teams.FirstOrDefaultAsync(t => t.Id == id);
            if (team == null)
            {
                return NotFound();
            }

            return new ObjectResult(team);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTeam([FromBody] TeamDto teamDto)
        {
            if (teamDto == null)
            {
                return BadRequest();
            }

            // TODO: check if team exists
            var existingTeam = _context.Teams.Where(
                t => t.Members.Select(m => m.PlayerId)
                              .All(pid => teamDto.PlayerIds.Contains(pid))).FirstOrDefault();

            if(existingTeam != null)
            {
                return BadRequest();
            }

            try{
            var team = new Team() { Name = teamDto.TeamName };
            var players = _context.Players.Where(p => teamDto.PlayerIds.Contains(p.Id));
            foreach (var player in players)
            {
                var newMembership = new Membership() { Team = team, Player = player };
                player.TeamMemberships.Add(newMembership);
                team.Members.Add(newMembership);
            }

            _context.Teams.Add(team);
            await _context.SaveChangesAsync();

            return CreatedAtRoute("GetTeam", new { id = team.Id }, team);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return BadRequest();
            }
        }
    }

    public class TeamDto
    {
        public string TeamName { get; set; }
        public List<int> PlayerIds { get; set; }
    }
}