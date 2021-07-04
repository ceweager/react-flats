import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
    return (
      this.props.flats.map((flat) => {
        return <Flat
          key={flat.name}
          flat={flat}
          updateActive={this.props.updateActive}
        />;
      })
    );
  }
}

export default FlatList;
