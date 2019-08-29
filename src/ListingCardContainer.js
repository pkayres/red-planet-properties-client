import React, { Component } from 'react';
import ListingCard from './ListingCard';

class ListingCardContainer extends Component {

  render() {
    return (
      <div className="item-card-container">
      {
        this.props.listings.map(listing => {
          return <ListingCard
            listing={listing}
            key={listing.id}
            favMode={this.props.favMode}
            boughtMode={this.props.boughtMode}
            changeView={this.props.changeView}
            handleClick={this.props.handleClick}
            handleBought={this.props.handleBought}
            handleSell={this.props.handleSell}
            deleteListing={this.props.deleteListing}
            />
        })
      }
      </div>
    );
  }

}

export default ListingCardContainer;
