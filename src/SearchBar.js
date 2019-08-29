import React, { Component } from 'react';

class SearchBar extends Component {

  handleChange = (event) => {
    this.props.handleSearch(event.target.value)
  }

  render() {
    return (
      <div onChange={this.handleChange} className="ui focus input search">
        <input type="text" placeholder="Search properties..." />
      </div>
      
    )
  }

}

export default SearchBar;
