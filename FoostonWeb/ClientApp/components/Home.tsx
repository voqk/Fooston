import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    componentDidMount() {
        document.title = "Fooston | Houston, TX Foosball";
    }
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
                    maxHeight: '60vh',
                    cursor: 'pointer'
                }} 
                onClick={() => {this.props.history.push('/ratings')}}
                />
                <Row>
                    <Col sm={12}>
                        <div  className="text-center">
                            <div
                                className='font-effect-neon'
                                style={{
                                    fontFamily: 'Lato',
                                    fontSize: '6em',
                                    cursor: 'pointer'
                                }}
                                onClick={() => {this.props.history.push('/ratings')}}
                            >
                                <div>Houston, TX</div>
                                <div>Foosball</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-center">
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
