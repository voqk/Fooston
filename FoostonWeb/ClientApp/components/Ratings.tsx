import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface FetchDataExampleState {
    standings: Standing[];
    loading: boolean;
}

export class Ratings extends React.Component<RouteComponentProps<{}>, FetchDataExampleState> {
    constructor() {
        super();
        this.state = { standings: [], loading: true };

        fetch('api/Standings/Standings')
            .then(response => response.json() as Promise<Standing[]>)
            .then(data => {
                this.setState({ standings: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Ratings.renderForecastsTable(this.state.standings);

        return <div className="container">
            <h1>Ratings</h1>
            <p>Updated every week.</p>
            { contents }
            <h2>About</h2>
            <p>Will D's specially tuned <a href='https://en.wikipedia.org/wiki/Elo_rating_system'>Elo chess rating system</a> for weekly foos tournaments. A high K value plus penalties for missing tournaments keeps this board dynamic.</p>
        </div>;
    }

    private static renderForecastsTable(standings: Standing[]) {
        return (
            <div className='table-responsive'>
            <table className='table table-condensed table-striped'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Standings</th>
                        <th>Rating</th>
                        <th>Games Back</th>
                        <th>Prev rank</th>
                        <th>Prev points</th>
                        <th>Wks off</th>
                        <th>+/-</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Percent</th>
                    </tr>
                </thead>
                <tbody>
                {standings.map((standing, i)=>
                    <tr key={ i }>
                        <td>{ standing.rank }</td>
                        <td>{ standing.player }</td>
                        <td>{ standing.rating }</td>
                        <td>{ standing.gamesBack }</td>
                        <td>{ standing.previousRank }</td>
                        <td>{ standing.previousPoints }</td>
                        <td>{ standing.weeksOff }</td>
                        <td>{ standing.plusMinus }</td>
                        <td>{ standing.wins }</td>
                        <td>{ standing.losses }</td>
                        <td>{ standing.percent }</td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        );
    }
}

interface Standing {
    rank: number;
    player: string;
    rating: number;
    gamesBack: number;
    previousRank: number; 
    previousPoints: number;
    weeksOff: number;
    change: number;
    plusMinus: number;
    wins: number;
    losses: number;
    percent: number;
}