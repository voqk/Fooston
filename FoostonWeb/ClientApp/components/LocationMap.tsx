/// <reference types="@types/googlemaps" />
/// <reference types="@types/markerclustererplus" />
import * as React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, WithGoogleMapProps } from 'react-google-maps';

interface IProps {
    locations: Array<Location>
}

interface LatLng {
    lat: number;
    lng: number;
}

interface IState {
    latLngs: Array<LatLng>
}

class Location {
    constructor(public name: string, public address: string) {
    }
}

class LocationMapBase extends React.Component<IProps & WithGoogleMapProps, IState > {
    constructor(props: any) {
        super(props);
        this.state = {
            latLngs : []
        }
    }

    componentDidMount() {
        let geocoder = new google.maps.Geocoder();
        this.props.locations.map((location, i) => {
            const loc = geocoder.geocode({address: location.address}, (result, status) => {
                if (!result) {
                    return;
                }
                const loc2 = result[0].geometry.location;
                const latLngs = [ ... this.state.latLngs ];
                latLngs[i] = { lat: loc2.lat(), lng: loc2.lng() };
                this.setState({ latLngs })
            });
            return loc;
        });
    }

    render() {
        return (
            <GoogleMap key={1} defaultZoom={10.5} defaultCenter={{ lat: 29.7604, lng: -95.3698 }}>
                {this.state.latLngs.map((latLng, i) => {
                    return (
                        <Marker key={i} position={{ ...latLng }} />
                    );
                })}
            </GoogleMap>
        );
    }
}

export const LocationMap = withScriptjs(withGoogleMap((LocationMapBase)));