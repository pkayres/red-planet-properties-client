import React, { Component } from 'react';
import ListingCardContainer from './ListingCardContainer';

class MainContainer extends Component {

  render() {
    return (
      <div>
        <ListingCardContainer
          listings={this.props.listings}
          changeView={this.props.changeView}
          favorites={this.props.favorites}
          handleClick={this.props.handleClick}
          handleBought={this.props.handleBought}
          deleteListing={this.props.deleteListing}
          />
      </div>

    );
  }

}

export default MainContainer;
