import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { RatingsTable } from './RatingsTable';
import Standing from './Standing';

interface Props extends RouteComponentProps<{}> {
    onSubmit: (standings: Standing[]) => void;
}

interface State {
    value: '';
}

const example = [
    "1,HUNTER W,2442,-,1,2200,-,242,8,8,",
    "2,WILL D,2407,0.5,1,2200,-,207,3,7,4",
    "3,JAMES F,2130,2,4,2176,-,-46,4,6,2",
    "..."
]
export default class RatingsCsvForm extends React.Component<Props, State> {
    constructor() {
        super();

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
    }

    getValidationState() {
        const standings = this.state.value.split('\n').map(s => new Standing(s));
        console.log(standings.length);
        return standings.length >= 1 ? "success" : "error";
    }

    handleChange(e: any) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e: any) {
        e.preventDefault();
        const standings = this.state.value.split('\n').map(s => new Standing(s));
        this.props.onSubmit(standings);
        this.props.history.push("/ratings");
    }

    render() {
        return(
            <div>
                <Row>
                    <Col>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup 
                                controlId="ratingsCsv"
                                validationState={this.getValidationState()}>
                                <ControlLabel>Ratings CSV</ControlLabel>
                                <FormControl
                                    componentClass="textarea"
                                    rows={15}
                                    value={this.state.value}
                                    placeholder={example.join(Array(1000).join(" "))}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button bsStyle="primary" className="pull-right" type="submit">Submit</Button>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h2>Preview</h2>
                        <RatingsTable standings={this.state.value.split('\n').map(s => new Standing(s))} />
                    </Col>
                </Row>
            </div>
        );
    }
}