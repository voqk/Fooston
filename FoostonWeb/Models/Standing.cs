using System;
using System.ComponentModel.DataAnnotations;

namespace FoostonWeb.Models {
    public class Standing {
        public int Id { get; set; }
        public DateTime TimeStamp { get; set; }
        public int Rank { get; set; }
        public string Name { get; set; }
        public string Rating { get; set; }
        public string GamesBack { get; set; }
        public string PreviousRank { get; set; }
        public string PreviousPoints { get; set; }
        public string WeeksOff { get; set; }
        public string Change { get; set; }
        public string PlusMinus { get; set; }
        public string Wins { get; set; }
        public string Losses { get; set; }
        public string Percent { get; set; }
    }
}