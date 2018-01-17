import * as React from 'react';
import { RouteComponentProps,  Route } from 'react-router';
import Ratings from './Ratings';
import RatingsCsvForm from './RatingsCsvForm';
import { Row, Col } from 'react-bootstrap';
import Standing from './Standing';
import 'isomorphic-fetch';

interface State {
    standings: Standing[]
}

export default class RatingsContainer extends React.Component<RouteComponentProps<{}>, State> {
    constructor() {
        super();
        this.state = {standings: []};

        // fetch('api/Standings/Standings')
        //     .then(response => response.json() as Promise<Standing[]>)
        //     .then(data => {
        //         this.setState({ standings: data, loading: false });
        //     });

        this.updateStandings = this.updateStandings.bind(this);
    }

    updateStandings(standings: Standing[]) {
        this.setState({standings: standings});
    }
    
    render() {
        return (
            <div className="container">
                <Row>
                    <div className='page-header'>
                        <h1>Ratings</h1>
                    </div>
                </Row>
                <Route exact path={this.props.match.url} render={() => <Ratings standings={this.state.standings} {...this.props}/>} />
                <Route path={`${this.props.match.url}/csv`} render={() => <RatingsCsvForm onSubmit={(s) => this.updateStandings(s)} {...this.props}/> } />
            </div>
        );
    }
}
