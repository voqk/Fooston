import * as React from 'react';
import { Table as BsTable } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Player from './Player';

interface PlayersTableProps {
    players: Player[];
}

export default class PlayersTable extends React.Component<PlayersTableProps, {}> {
    constructor(props: PlayersTableProps) {
        super(props);
    }

    render() {
        return(
            <BsTable striped hover>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.players.map(player=> {
                        var toLink = `/players/details/${player.id}`
                        return (
                            <tr key={player.id}>
                                <td>
                                    <LinkContainer to={toLink}>
                                        <a href={toLink}>{player.name}</a>
                                    </LinkContainer></td>
                            </tr>
                        );
                    })}
                </tbody>
            </BsTable>
        );
    }
}