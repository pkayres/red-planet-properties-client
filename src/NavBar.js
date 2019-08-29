import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Login from './Login';

class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
        <button class="button2" onClick={() => this.props.changeView('home')} >HOME</button>
        <SearchBar handleSearch={this.props.handleSearch} />
        <div>
          <button class="button" onClick={()=> this.props.changeView("form")}>POST LISTING</button>
          <button class="button" onClick={() => this.props.handleSort()}>SORT PRICE </button>
          <button class="button" onClick={() => this.props.changeView("favorites")}> FAVORITES </button>
          <button class="button" onClick={() => this.props.changeView("bought")}> PURCHASED</button>
        </div>
      </div>
    );
  }

}

export default NavBar;
