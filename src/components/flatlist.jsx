import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
    console.log(this.props);
    return (
      this.props.flats.map((flat) => {
        return <Flat key={flat.name} flat={flat} />;
      })
    );
  }
}

export default FlatList;
