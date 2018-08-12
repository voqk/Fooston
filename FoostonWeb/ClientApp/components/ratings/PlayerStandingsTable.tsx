import * as React from 'react';
import { Table } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import { Standing } from './Standing';
import { LinkContainer } from 'react-router-bootstrap';
import * as moment from 'moment';

interface RatingsTableProps {
    standings: Standing[];
}

const darkPurpleCell = {
    backgroundColor: "#532476",
    color: "#FFFFFF"
};

const lightPurpleCell = {
    color: "#532476"
};

const darkBlueCell = {
    backgroundColor: "#203764",
    color: "#FFFFFF"
};

const blueCell = {
    backgroundColor: "#305496",
    color: "#FFFFFF"
};

const lightBlueCell = {
    backgroundColor: "#DDEBF7"
};

const lightGreenCell = {
    backgroundColor: "#C6EFCE",
    color: "#006100"
};

const lightRedCell = {
    backgroundColor: "#fbc9c1",
    color: "#9c0006"
};

const darkOrangeCell = {
    backgroundColor: "#c65611"
};

const lightOrangeCell = {
    backgroundColor: "#f4b084"
};

const redTextCell = {
    color: "#ff0000"
};

const noStyleCell = {}

function getRatingStyle(rating: string) {
    const val = parseInt(rating);
    if (val >= 1800) { return darkPurpleCell; }
    else if (val >= 1400) { return darkBlueCell; }
    else if (val >= 1200) { return blueCell; }
    else if (val >= 1000) { return lightBlueCell; }
}

function getWeeksOffStyle(weeksOff: string) {
    const val = parseInt(weeksOff);
    if (val >= 3) { return darkOrangeCell; }
    if (val >= 1) { return lightOrangeCell; }
}

function getGamesBackStyle(gamesBack: string) {
    if (gamesBack === "-") { return lightPurpleCell; }

    const val = parseFloat(gamesBack);
    if (val <= 3) { return lightPurpleCell; }
}

function getPlusMinusStyle(plusMinus: string) {
    const val = parseInt(plusMinus);
    if (val < 0) { return redTextCell; }
}

function getPercentStyle(percent: string) {
    const val = parseFloat(percent);
    if (val > 55) { return darkBlueCell; }
    if (val > 45) { return blueCell; }
    if (val > 35) { return lightBlueCell; }
}

function getChangeStyle(change: string) {
    const val = parseInt(change);
    if (!val) { return noStyleCell; }
    return val < 0 ? lightRedCell : lightGreenCell;
}

export const PlayerStandingsTable = ( props: RatingsTableProps ) => (
    <Table striped bordered condensed hover responsive>
        <thead>
            <tr>
                <th>Date</th>
                <th>Rank</th>
                <th>Rating</th>
                <th>Games<br />Back</th>
                <th>Prev rank</th>
                <th>Prev points</th>
                <th>Wks<br />Off</th>
                <th>Change</th>
                <th>+/-</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Percent</th>
            </tr>
        </thead>
        <tbody>
        {props.standings.map((standing, i)=>
            <tr key={ i }>
                <td>{ moment(standing.timeStamp).format('LL')}</td>
                <td>{ standing.rank }</td>
                <td style={getRatingStyle(standing.rating)}>{ standing.rating }</td>
                <td style={getGamesBackStyle(standing.gamesBack)}>{ standing.gamesBack }</td>
                <td>{ standing.previousRank }</td>
                <td style={getRatingStyle(standing.previousPoints)}>{ standing.previousPoints }</td>
                <td style={getWeeksOffStyle(standing.weeksOff)}>{ standing.weeksOff }</td>
                <td style={getChangeStyle(standing.change)}>{standing.change}</td>
                <td style={getPlusMinusStyle(standing.plusMinus)}>{ standing.plusMinus }</td>
                <td>{ standing.wins }</td>
                <td>{ standing.losses }</td>
                <td style={getPercentStyle(standing.percent)}>{ standing.percent }</td>
            </tr>
        )}
        </tbody>
    </Table>
);