import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export default class Contact extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="container">
            <h1>Contact</h1>
            <p>Contact info here</p>
        </div>;
    }
}
