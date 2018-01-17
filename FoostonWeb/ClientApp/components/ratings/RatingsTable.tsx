import * as React from 'react';
import { Table } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import Standing from './Standing';

interface RatingsTableProps {
    standings: Standing[];
}

export const RatingsTable = ( props: RatingsTableProps ) => (
    <Table striped bordered condensed hover>
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
        {props.standings.map((standing, i)=>
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
    </Table>
);