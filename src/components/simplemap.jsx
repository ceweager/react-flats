/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker"></div>;

class SimpleMap extends Component {
  render() {
    const { lat, lng } = this.props.activeObject;
    const defaultProps = {
      center: {
        lat: lat,
        lng: lng
      },
      zoom: 11
    };
    console.log(defaultProps);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={lat}
            lng={lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
