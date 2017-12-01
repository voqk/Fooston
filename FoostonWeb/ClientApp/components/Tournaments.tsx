import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Tournaments extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="container">
            <h1>Tournaments</h1>
            <p>List local foosball tournaments in Houston</p>
        </div>;
    }
}