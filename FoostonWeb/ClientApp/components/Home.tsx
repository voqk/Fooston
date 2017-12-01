import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        const style = {
            backgroundColor: '#0A1922',
            color: 'hsla(0, 0%, 100%, .9)',
            height: '100%'
        };
        return(
            <div style={style} className='container-fluid'>
                <img className="text-center" src='/fooston-texas.svg' style={{
                    padding: '20px 0px 20px',
                    maxHeight: '600px'
                }} />
                <Row>
                    <Col sm={12}>
                        <div  className="text-center">
                            <h1>Houston Foosball</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={23}>
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
