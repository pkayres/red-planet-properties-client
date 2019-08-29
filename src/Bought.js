import React, { Component } from 'react';
import ListingCardContainer from './ListingCardContainer'

class Bought extends Component {

  render() {
    return (
      <div>
        <h1 className="header" >PURCHASED</h1>
        <ListingCardContainer
          handleSell={this.props.handleSell}
          handleSort={this.props.handleSort}
          handleClick={this.props.handleClick}
          boughtMode={true}
          listings={this.props.bought}
          deleteListing={this.props.deleteListing}
          />
      </div>
    );
  }

}

export default Bought;
