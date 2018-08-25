import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Panel, InputGroup, Glyphicon, Alert, Form } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import * as EmailValidator from 'email-validator';
import 'isomorphic-fetch';
import { validate } from 'email-validator';

interface State {
    email: string;
    name: string;
    alertState: undefined | "success" | "error";
}

interface EmailRegistration {
    name: string;
    email: string;
}

export default class Join extends React.Component<RouteComponentProps<{}>, State> {
    constructor() {
        super();
        this.state = {} as State;

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderAlert = this.renderAlert.bind(this);
        this.dismissAlert = this.dismissAlert.bind(this);
    }

    componentDidMount() {
        document.title = "Fooston | Join";
    }

    handleNameChange(e: any) {
        this.setState({ name: e.target.value });
    }

    handleEmailChange(e: any) {
        this.setState({ email: e.target.value });
    }

    validateEmail() {
        if (!this.state.email) {
            return undefined;
        }

        const isValid = EmailValidator.validate(this.state.email);
        return isValid ? "success" : "error";
    }

    handleSubmit(e: any) {
        e.preventDefault();
        fetch('api/EmailRegistration', {
            method: 'POST',
            body: JSON.stringify({name:this.state.name, email: this.state.email} as EmailRegistration),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then((data) => {
            if(data.status != 200) {
                this.setState({alertState: "error"});
            } else {
                this.setState({
                    email: '', 
                    name: '',
                    alertState: "success"
                });
            }
            console.log(data);
        }).catch((reason) => {
            this.setState({alertState: "error"});
        });
    }

    dismissAlert() {
        this.setState({alertState: undefined});
    }

    renderAlert() {
        if(this.state.alertState === undefined) {
            return null;
        }
        else if (this.state.alertState === "success") {
            return (
                <Alert bsStyle="success" onDismiss={this.dismissAlert}>
                    <strong>Got it!</strong> You'll hear from us soon.
                </Alert>
            );
        } else {
            return (
                <Alert bsStyle="danger" onDismiss={this.dismissAlert}>
                    <strong>Hmm...</strong> something went wrong. Tell Hunter he needs to fix it.
                </Alert>
            );
        }
    }

    public render() {
        const emailValidationState = this.validateEmail();
        const isDisabled = this.state.name === undefined || emailValidationState === undefined || emailValidationState === "error";

        return (
            <div className="container">
                <Row>
                    <Col sm={6} smPush={3} md={4} mdPush={4}>
                        <h3>Sign up for updates</h3>
                        <Panel>
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <ControlLabel>Name</ControlLabel>
                                    <InputGroup>
                                    <FormControl 
                                        required
                                        type="text" 
                                        value={this.state.name} 
                                        onChange={this.handleNameChange}
                                    />
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="user" />
                                    </InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup 
                                    validationState={emailValidationState}>
                                    <ControlLabel>Email</ControlLabel>
                                    <InputGroup>
                                    <FormControl 
                                        required
                                        type="text" 
                                        value={this.state.email} 
                                        onChange={this.handleEmailChange}
                                    />
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="envelope" />
                                    </InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                                <Button 
                                    block 
                                    bsStyle="primary" 
                                    type="submit" 
                                    disabled={isDisabled}
                                    value="submit">Submit</Button>
                            </form>
                        </Panel>
                        {this.renderAlert()}
                    </Col>
                </Row>
            </div>
        ) ;
    }
}