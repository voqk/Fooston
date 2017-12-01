import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class SignUpForm extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return(
            <div className="container">
                <h1>Sign Up</h1>
                <p>Enter your info to receive our weekly ratings and tournament results.</p>
            </div>
        );
    }
}