import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Standing from './Standing';
import { RatingsTable } from './RatingsTable';

interface Props extends RouteComponentProps<{}> {
    standings: Standing[];
}

export default class Ratings extends React.Component<Props, {}> {
    constructor() {
        super();
        this.state = { standings: [], loading: true };
    }

    public render() {
        return (
            <div>
                <p>Updated every week.</p>
                <RatingsTable standings={this.props.standings} />
                <h2>About</h2>
                <p>Will D's specially tuned <a href='https://en.wikipedia.org/wiki/Elo_rating_system'>Elo chess rating system</a> for weekly foos tournaments. A high K value plus penalties for missing tournaments keeps this board dynamic.</p>
            </div>
        );
    }
}
