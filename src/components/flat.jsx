/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Flat extends Component {
  render({ imageUrl }, { name }, { price }, { priceCurrency }) {
    return (
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl};)`
        }}
      >
        <div className="card-category">
          {price}
          {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}
