import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { RatingsTable } from './RatingsTable';
import { Standing } from './Standing';
import * as DatePicker from 'react-bootstrap-date-picker';

interface State {
    date: Date;
    value: '';
}

const example = [ 
    ["1","HUNTER W","2442","-","1,2200","-","242","8","8"],
    ["2","WILL D","2407","0.5","1","2200","-","207","3","7","4"],
    ["3","JAMES F","2130","2","4","2176","-","-46","4","6","2"]
].map(e => e.join('\t'));

export default class RatingsCsvForm extends React.Component<RouteComponentProps<{}>, State> {
    constructor() {
        super();

        this.state = {value: '', date: new Date()};

        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: any) {
        this.setState({ value: e.target.value });
    }

    handleDateChange(e: any) {
        this.setState({ date: new Date(e) });
    }

    handleSubmit(e: any) {
        e.preventDefault();

        const standings = this.state.value.split('\n').map(s => new Standing(s, this.state.date));

        fetch('api/Standings', {
            method: 'POST',
            body: JSON.stringify(standings),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then((data) => {
            console.log(data);
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm={6} md={3}>
                            <FormGroup>
                                <ControlLabel>Date</ControlLabel>
                                <DatePicker value={this.state.date.toISOString()} onChange={this.handleDateChange}/>
                                <HelpBlock>Standings release date</HelpBlock>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup 
                        controlId="ratingsCsv">
                        <ControlLabel>Ratings CSV</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            rows={15}
                            value={this.state.value}
                            placeholder={example.join(Array(1000).join(" "))}
                            onChange={this.handleChange}
                        />
                        <HelpBlock>Tab delimited standings. Copy the table from Will D's email into excel, and then copy that into this field.</HelpBlock>
                    </FormGroup>
                    <Button bsStyle="primary" className="pull-right" type="submit">Submit</Button>
                </form>
                <Row>
                    <Col sm={12}>
                    <h2>Preview</h2>
                        <RatingsTable standings={this.state.value.split('\n').map(s => new Standing(s, this.state.date))} />
                    </Col>
                </Row>
            </div>
        );
    }
}