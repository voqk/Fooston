using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FoostonWeb.Controllers
{
    [Route("api/[controller]")]
    public class StandingsController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Standing> Standings()
        {
            return new[] {
                new Standing { Rank=1, Player="Will D", Rating=2019, GamesBack=0, PreviousRank=1, PreviousPoints=2083, WeeksOff=0, Change=-64, PlusMinus=8, Wins=10, Losses=2, Percent=83.30 },
                new Standing { Rank=2, Player="Ruben Z", Rating=1766, GamesBack=1.5, PreviousRank=3, PreviousPoints=1840, WeeksOff=0, Change=-74, PlusMinus=1, Wins=5, Losses=4, Percent=55.60 },
            };
        }

    }
    public class Standing
    {
        public int Rank { get; set; }
        public string Player { get; set; }
        public int Rating { get; set; } 
        public double GamesBack { get; set; }
        public int PreviousRank { get; set; }
        public int PreviousPoints { get; set; }
        public int WeeksOff { get; set; }
        public int Change { get; set; }
        public int PlusMinus { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public double Percent { get; set; }
    }
}
