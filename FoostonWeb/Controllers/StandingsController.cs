using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using FoostonWeb.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using Microsoft.AspNetCore.Authorization;

namespace FoostonWeb.Controllers
{
    [Route("api/[controller]")]
    public class StandingsController : Controller
    {
        private readonly FoostonDbContext _context;

        public StandingsController(FoostonDbContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public async Task<StandingsViewModel> GetViewModel()
        {
            var latestStandings = await _context.Standings.GroupBy(s => s.TimeStamp).OrderByDescending(standingGroups => standingGroups.Key).FirstOrDefaultAsync();
            var otherDates = await _context.Standings.Select(s => s.TimeStamp).Distinct().OrderBy(date => date).ToListAsync();

            return new StandingsViewModel { CurrentStandings = latestStandings.ToList(), OtherDates = otherDates };
        }

        [HttpGet("player")]
        public async Task<IEnumerable<Standing>> GetByPlayer(string playerName)
        {
            return await _context.Standings
                                    .Where(s => s.Name == playerName)
                                    .OrderByDescending(s => s.TimeStamp)
                                    .ToListAsync();
        }

        [HttpGet("lateststandings")]
        public async Task<IGrouping<DateTime, Standing>> LatestStandings()
        {
            return await _context.Standings.GroupBy(s => s.TimeStamp).OrderBy(g => g.Key).FirstOrDefaultAsync();
        }

        [HttpGet("standingsAtTime")]
        public async Task<IEnumerable<Standing>> GetAtTime(DateTime timeStamp) => await _context.Standings.Where(s => s.TimeStamp == timeStamp).ToListAsync();

        [HttpGet("timestamps")]
        public async Task<IEnumerable<DateTime>> GetTimeSTamps() => await _context.Standings.Select(s => s.TimeStamp).Distinct().ToListAsync();

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Update([FromBody] List<Standing> standings)
        {
            if(standings == null || !standings.Any()) {
                return BadRequest();
            }
            try{
                _context.Standings.AddRange(standings);
                await _context.SaveChangesAsync();
            }
            catch (Exception e) {
                return BadRequest(e.Message);
            }

            return Ok();
        }
    }

    public class StandingsViewModel
    {
        public List<Standing> CurrentStandings { get; set; }
        public List<DateTime> OtherDates { get; set; }
    }
}