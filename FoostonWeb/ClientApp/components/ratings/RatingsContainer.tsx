import * as React from 'react';
import { RouteComponentProps,  Route } from 'react-router';
import Ratings from './Ratings';
import RatingsCsvForm from './RatingsCsvForm';
import PlayerStanding from './PlayerStanding';
import { Row, Col } from 'react-bootstrap';
import { Standing, RatingsViewModel } from './Standing';
import 'isomorphic-fetch';

export default class RatingsContainer extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
        this.state = {standings: [], otherDates: []};
    }

    componentDidMount() {
        document.title = "Fooston | Houston's Player Ratings"
    }
    
    render() {
        return (
            <div className="container">
                <Row>
                    <div className='page-header'>
                        <h1>Ratings</h1>
                    </div>
                </Row>
                <Route exact path={this.props.match.url} component={Ratings} />
                <Route path={`${this.props.match.url}/csv`} component={RatingsCsvForm} />
                <Route path={`${this.props.match.url}/player/:playerId`} component={PlayerStanding} />
            </div>
        );
    }
}
