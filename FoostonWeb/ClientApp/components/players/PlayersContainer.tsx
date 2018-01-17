import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'isomorphic-fetch';

import Player from './Player';
import PlayersTable from './PlayersTable';

interface PlayersContainerState {
    players: Player[];
}

export default class PlayersContainer extends React.Component<RouteComponentProps<{}>, PlayersContainerState> {
    constructor() {
        super();
        this.state = { players: []}

        fetch('api/players')
            .then(response => response.json() as Promise<Player[]>)
            .then(data => {
                console.log(data);
                this.setState({ players: data });
            });
    }

    public render() {
        return(
            <div className='container'>
                <div className='page-header'>
                    <h1>Players</h1>
                </div>
                <Row>
                    <Col>
                        <Button bsStyle="primary">New Player</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PlayersTable players={this.state.players} />
                    </Col>
                </Row>
            </div>
        );
    }
}
