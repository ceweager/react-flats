import React, { Component } from 'react';

class FlatList extends Component {
  render({ flats }) {
    return (
      flats.map((flat) => {
        return <Flat key={flat.name} flat={flat} />;
      })
    );
  }
}

export default FlatList;
