export default class Standing {
    rank: number;
    player: string;
    rating: string;
    gamesBack: string;
    previousRank: string ; 
    previousPoints: string ;
    weeksOff: string;
    change: string ;
    plusMinus: string ;
    wins: string;
    losses: string;
    percent: string;

    constructor(csv: string) {
        const fields = csv.split(",");
        this.rank = Number(fields[0]);
        this.player = fields[1];
        this.rating = fields[2];
        this.gamesBack = fields[3];
        this.previousRank = fields[4];
        this.previousPoints =fields[5];
        this.weeksOff = fields[6];
        this.change =fields[7];
        this.plusMinus =fields[9];
        this.wins =fields[10];
        this.losses =fields[11];
        this.percent =fields[12];
    }
}