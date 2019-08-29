import React, { Component } from 'react';


class ListingCard extends Component {

  render() {
    return (
      <div className="listing-card">
        <div className="image-wrapper" >
          <img className="image" src={this.props.listing.image} />
        </div>
        <div class="listing-info">

          <h2 class="h2">{this.props.listing.location}</h2>
          <p>{this.props.listing.description}</p>

            {
              this.props.boughtMode
              ?
              <div class="purchased-buttons">
              <button class="button3" onClick={() => this.props.handleSell(this.props.listing)}>Sell Property</button>
              <button class="button3"onClick={() => this.props.deleteListing(this.props.listing)}>Delete Listing</button>

              </div>
              :
              <div class="price-holder">
              <h2 class="price">${this.props.listing.price}</h2><br></br>
              <button class="button3"onClick={() => this.props.handleBought(this.props.listing)}>PURCHASE</button>
              </div>
            }

            {
              this.props.favMode
              ?
              null
              :
              <button class="button3"onClick={()=> this.props.handleClick(this.props.listing)}>FAVORITE</button>
            }
            </div>
        </div>
    );
  }

}

export default ListingCard;
