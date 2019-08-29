import React, { Component } from 'react';
import ListingCardContainer from './ListingCardContainer'

class Favorites extends Component {

  render() {
    return (
      <div>
        <h1 className="header">FAVORITES</h1>
        <ListingCardContainer
          handleSort={this.props.handleSort}
          handleBought={this.props.handleBought}
          favMode={true}
          listings={this.props.favorites}
          />
      </div>
    );
  }

}

export default Favorites;
