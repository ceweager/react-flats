/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FlatList from './flatlist';
import SimpleMap from './simplemap';
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

  render() {
    const allFlats = flats;
    const activeObject = this.state.activeObject;
    console.log(this.props)
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={allFlats} updateActive={this.updateActive} />
        </div>
        <div className="map-container">
          <SimpleMap activeObject={activeObject} />
        </div>
      </div>
    );
  }
}

export default App;
