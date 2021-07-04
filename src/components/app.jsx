/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FlatList from './flatlist';
import flats from '../data/flats';

class App extends Component {
  render() {
    const allFlats = flats;
    console.log(allFlats);
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={allFlats} />
        </div>
        <div className="map-container">
          {/* <GoogleMapReact /> */}
        </div>
      </div>
    );
  }
}

export default App;
