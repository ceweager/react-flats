/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flatlist';
import Marker from './simplemap';
import flats from '../data/flats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeObject: {
        lat: 10.99835602,
        lng: 77.01502627
      },
    };
    this.updateActive = this.updateActiveObject;
  }


  updateActiveObject = (lat, lng) => {
    this.setState({
      activeObject: {
        lat: lat,
        lng: lng
      },
    });
    console.log(`Updated the active object. Lat is ${this.state.activeObject.lat} and lng is ${this.state.activeObject.lng}`);
  }

  center() {
    return {
      lat: this.state.activeObject.lat,
      lng: this.state.activeObject.lng
    };
  }

  render() {
    const allFlats = flats;
    console.log(this.props);
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={allFlats} updateActive={this.updateActive} />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.activeObject.lat} lng={this.state.activeObject.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
