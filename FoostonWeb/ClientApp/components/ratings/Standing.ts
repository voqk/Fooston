export class Standing {
    timeStamp: Date;
    rank: number;
    name : string;
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

    constructor(csv: string, timeStamp: Date) {
        this.timeStamp = timeStamp;
        const fields = csv.split("\t");
        this.rank = Number(fields[0]);
        this.name = fields[1];
        this.rating = fields[2];
        this.gamesBack = fields[3];
        this.previousRank = fields[4];
        this.previousPoints =fields[5];
        this.weeksOff = fields[6];
        this.change =fields[7];
        this.plusMinus =fields[8];
        this.wins =fields[9];
        this.losses =fields[10];
        this.percent =fields[11];
    }
}

export interface RatingsViewModel {
    currentStandings: Standing[];
    otherDates: Date[];
}