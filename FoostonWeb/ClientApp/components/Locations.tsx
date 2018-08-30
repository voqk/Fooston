import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {
    Row, Col,
    ListGroup, ListGroupItem
} from 'react-bootstrap';
import { LocationMap } from './LocationMap';

class Location {
    lat?: number;
    lon?: number;
    constructor(public name: string, public address: string) {
    }
}

interface IProps extends RouteComponentProps<any> {}

interface IProps {
    locations: Array<Location>
}

interface IState {
    locations: Array<Location>;
}

export class Locations extends React.Component<IProps, IState> {
    constructor(props: IProps | undefined) {
        super(props);
        this.state = {
            locations: [
                new Location("Libery Station", "2102 Washington, Houston, TX, 77007"),
                new Location("Ladybirds", "5519 Allen St, Houston, TX 77007"),
                new Location("Windbern Messhall", "3701 Travis St, Houston, TX, Houston, TX 77002"),
                new Location("La Grange", "2517 Ralph St, Houston, TX, 77007"),
                new Location("Bubba's", "6255 Washington Ave, Houston, TX, 77007"),
                new Location("Cottonwood", "6422 N Shepherd Dr, Houston, TX 77018"),
                new Location("The Concert Pub-North", "2470 Cypress Creek Pkwy, Houston, TX 77068"),
                new Location("Sunny's Bar", "902 Capitol St, Houston, TX 77002"),
                new Location("Cellar Bar", "3140 Richmond Ave, Houston, TX, 77098"),
                new Location("Nextdoor", "2020 Waugh Dr, Houston, TX"),
                new Location("Hops Meet Barley", "2436, 2245 W Alabama St, Houston, TX 77098"),
                new Location("T-Bones", "1971 W T C Jester Blvd, Houston, TX 77008"),
                new Location("Public House Heights", "2802 White Oak Dr, Houston, TX 77007"),
                new Location("Brash Brewing", "508 W Crosstimbers Rd, Houston, TX 77018"),
                new Location("Darwin's Pub", "33 Waugh Dr, Houston, TX 77007"),
                new Location("Acadia Bar and Grill", "3939 Cypress Creek Pkwy, Houston, TX 77014"),
                new Location("Shoeshine Charley's Big Top Lounge", "3714 S Main St, Houston, TX 77002")
            ]
        } 
    }

    componentDidMount() {
        document.title = "Fooston | Where to play Foosball in Houston, TX";
    }

    renderLocationList() {
        return (
            <ListGroup>
                {this.state.locations.map((location, i) => {
                    return (
                        <ListGroupItem key={i} header={location.name}>{location.address}</ListGroupItem>
                    );
                })}
            </ListGroup>
        );
    }

    renderMap() {
        return (
            <div>
                <LocationMap
                    locations={this.state.locations}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCAarKaLhhyAU9HQ06YdoSL-y6xfO7Ob8E"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <h3>This page is a work in progress</h3>
                <p>Just go to Liberty Station on Thursdays at 8:30 PM</p>
            </div>
        );
    }

    render() {

        return (
            <div className="container">
                <Row>
                    <div className='page-header'>
                        <h1>Foosball tables in Houston, TX</h1>
                    </div>
                </Row>
                <Row>
                    <Col md={8}>
                        {this.renderMap()}
                    </Col>
                    <Col md={4}>
                        {this.renderLocationList()}
                    </Col>
                </Row>
            </div>
        );
    }
}