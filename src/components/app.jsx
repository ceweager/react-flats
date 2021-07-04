/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FlatList from 'src/components/flatlist';
import flats from '../data/flats';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <FlatList flats={flats} />
        </div>
        <div>
          <GoogleMapReact />
        </div>
      </div>
    );
  }
}

export default App;
