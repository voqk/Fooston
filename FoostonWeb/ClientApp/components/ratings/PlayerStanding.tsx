import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { PlayerStandingsTable } from './PlayerStandingsTable';
import { Standing } from './Standing';
import { Label, ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, ScatterChart } from 'recharts';
import 'isomorphic-fetch';
import { Tooltip } from 'react-bootstrap';
import * as moment from 'moment';

interface Props extends RouteComponentProps<{playerId: string}>{}

interface State {
    standings: Standing[];
}

export default class PlayerStanding extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        fetch(`api/standings/player?playerName=${this.props.match.params.playerId}`)
        .then(response => response.json() as Promise<Standing[]>)
        .then(data => {
            this.setState({standings: data});
        });

        this.state = {standings:[]}
    }
    render() {
        const ratings = this.state.standings.map(s => {
            const rank = s.weeksOff === '-' ? parseInt(s.rating) : undefined;
            const offRank = s.weeksOff !== '-' ? parseInt(s.rating) : undefined;
            return {
                rank,
                offRank,
                timeStamp: s.timeStamp
            };
        });
        return (
            <div>
                <h3>{this.props.match.params.playerId}</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={ratings}>
                        <Line type="monotone" dataKey="rank" stroke="#8884d8" connectNulls={true}/>
                        <Line type="monotone" dataKey="offRank" stroke="transparent" dot={{stroke: 'none', fill: "#FF0000", r:3}}/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis 
                            dataKey="timeStamp" 
                            tickFormatter={t => moment(t).format('l')} 
                            reversed
                        />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <PlayerStandingsTable standings={this.state.standings} />
            </div>
        );
    }
}