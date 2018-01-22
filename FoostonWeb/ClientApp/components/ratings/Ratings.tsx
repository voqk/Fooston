import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Standing, RatingsViewModel } from './Standing';
import { RatingsTable } from './RatingsTable';
import { Pager } from 'react-bootstrap';
import * as moment from 'moment';
import 'isomorphic-fetch';

class TimeStampedStanding {
    timeStamp: Date;
    standings?: Array<Standing>;
    constructor(timeStamp: Date, standings?: Array<Standing>) {
        this.timeStamp = timeStamp;
        this.standings = standings;
    }
}

interface State {
    standings: Array<TimeStampedStanding>;
    selectedIndex: number;
    maxIndex: number;
}

export default class Ratings extends React.Component<RouteComponentProps<{}>, State> {

    constructor() {
        super();

        // generate 20 empty standings to pre-fill table w/ empty rows
        const now = new Date();
        const emptyStandings = Array<Standing>(20);
        for(let i=0;i<emptyStandings.length; i++) {
            const standing = new Standing(`${i+1}`, now);
            emptyStandings[i] = standing;
        }

        this.state = {
            standings: [new TimeStampedStanding(now, emptyStandings)],
            selectedIndex: 0,
            maxIndex: 0
        };

        this.handleIndexChange = this.handleIndexChange.bind(this);

        fetch('api/Standings')
            .then(response => response.json() as Promise<RatingsViewModel>)
            .then(data => {
                const standings = data.otherDates.map(d => new TimeStampedStanding(d));
                const latestIndex = standings.length -1;
                standings[latestIndex].standings = data.currentStandings;
                this.setState({
                    standings: standings,
                    selectedIndex: latestIndex,
                    maxIndex: latestIndex
                });
            });
    }

    handleIndexChange(change: number) {
        const newIndex = this.state.selectedIndex + change;
        if (!this.state.standings[newIndex].standings) {
            // fetch data
            const requestedTimestamp = this.state.standings[newIndex].timeStamp;
            fetch(`api/standings/standingsAtTime?timestamp=${requestedTimestamp}`)
            .then(response => response.json() as Promise<Standing[]>)
            .then(data => {
                const standings = {...this.state.standings} as Array<TimeStampedStanding>;
                standings[newIndex].standings = data;
                this.setState({standings: standings});
            });
        } 

        this.setState({selectedIndex: newIndex});
    }

    public render() {
        const index = this.state.selectedIndex;
        const standings = this.state.standings[index];
        const standingsLength = this.state.standings.length;
        return (
            <div>
                <p>Will D's specially tuned <a href='https://en.wikipedia.org/wiki/Elo_rating_system'>Elo chess rating system</a> for weekly foos tournaments. A high K value plus a temporary 10% penalty for missing tournaments keeps this board dynamic.</p>
                <Pager>
                    <Pager.Item previous disabled={this.state.selectedIndex <= 0} onClick={() => this.handleIndexChange(-1)}>
                        &larr; Previous
                    </Pager.Item>
                    {standings && standings.timeStamp ? moment(standings.timeStamp).format('LL'): ''}
                    <Pager.Item next disabled={this.state.selectedIndex >= this.state.maxIndex} onClick={() => this.handleIndexChange(1)}>
                        &rarr; Next
                    </Pager.Item>
                </Pager>
                <RatingsTable standings={standings && standings.standings ? standings.standings : []} />
            </div>
        );
    }
}
