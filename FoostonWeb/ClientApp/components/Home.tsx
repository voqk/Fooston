import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        const style = {
            backgroundColor: '#0A1922',
            color: 'hsla(0, 0%, 100%, .9)',
            height: 'auto !important',
            minHeight: '100%'
        };
        return(
            <div style={style} className='container-fluid'>
                <img className="img-responsive center-block" src='/fooston-texas.svg' style={{
                    marginTop: "40px",
                    marginBottom: "40px",
                    maxHeight: '60vh'
                }} />
                <Row>
                    <Col sm={12}>
                        <div  className="text-center">
                            <h1>Foosball in Houston, TX</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-center">
                            <LinkContainer to={'/ratings'}>
                                <Button bsSize="large" bsStyle="primary">Enter</Button>
                            </LinkContainer>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
