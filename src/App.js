import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import NavBar from './NavBar';
import Favorites from './Favorites';
import Login from './Login';
import UserHeader from './UserHeader';
import Bought from './Bought';
import CreateForm from './CreateForm';
import assets from './assets/images/banner.png'



class App extends React.Component {

  state = {
    listings: [],
    favorites: [],
    bought: [],
    selectedView: 'home',
    username: "",
    searchInput: "",
    login: false,
    sortPrice: false
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/listings')
    .then(response => response.json())
    .then(listings => this.setState({
      listings: listings,
    }))
  }


  deleteListing = (listing) => {
    fetch(`http://localhost:3000/listings/${listing.id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(listing => this.removeListing(listing))
  }

  removeListing = (listing) => {
    this.setState({
      bought: this.state.bought.filter(notDel => {
        return notDel.id !== listing.id
      })
    })
  }

  addNewListing = (newListing) => {
    this.setState({
      listings: [newListing, ...this.state.listings]
    })
  }

  login = (username) => {
    this.setState({
      login: true,
      username: username
    })
  }

  logOut = (username) => {
    this.setState({
      username: "",
      login: false,
    })
  }

  filter = () => {
    return this.state.listings.filter(listing => {
     return listing.location.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })
  }


  handleSearch = (userInput) => {
    this.setState({
      searchInput: userInput
    })
  }


  handleClick = (property) => {
    if(!this.state.favorites.includes(property))
    this.setState({
      favorites: [property, ...this.state.favorites]
    })
  }


  handleBought = (boughtProperty) => {
    let remainingListing = this.state.listings.filter(listing => {
      return listing.id !== boughtProperty.id
      })
      if(!this.state.bought.includes(boughtProperty))
    this.setState({
      bought: [boughtProperty, ...this.state.bought],
      listings: remainingListing,
    })
  }


  handleSell = (soldProp) => {
    let remainingListing = this.state.bought.filter(bought => {
      return bought.id !== soldProp.id
      })
      this.setState({
        bought: remainingListing,
        listings: [soldProp, ...this.state.listings]
      })
  }


  handleSort = (event) => {
    this.setState({
      sortPrice: !this.state.sortPrice
    })
    this.state.sortPrice
    ?
    this.state.listings.sort((a,b) => (a.price < b.price) ? 1 : -1)
    :
    this.state.listings.sort((a,b) => (a.price > b.price) ? 1 : -1)
  }

  renderLogin = () => {
    return  !this.state.login
    ?
    <Login login={this.login} />
    :
    <UserHeader logOut={this.logOut} username={this.state.username}/>
  }

  changeView = (newView) => {
    this.setState({
      selectedView: newView
    })
  }

  handleSubmit = () => {
    this.setState({
      selectedView: 'home'
    })
  }

  renderView = () => {
    switch(this.state.selectedView){
      case "home":
      return (
        <MainContainer
          changeView={this.changeView}
          handleBought={this.handleBought}
          handleClick={this.handleClick}
          listings={this.filter()}
          deleteListing={this.deleteListing}
          />
      )
      case "favorites":
      return (
        <Favorites handleSort={this.handleSort} handleBought={this.handleBought} favorites={this.state.favorites}/>
      )
      case "bought":
      return (
        <Bought
          handleSell={this.handleSell}
          handleSort={this.handleSort}
          handleClick={this.handleClick}
          handleSearch={this.handleSearch}
          bought={this.state.bought}
          deleteListing={this.deleteListing}
          />
      )
      case "form":
      return (
        <CreateForm handleSubmit={this.handleSubmit} addNewListing={this.addNewListing}/>
      )
    }
  }

  render(){
    return (
      <div>
        {this.renderLogin()}
        <img class="banner" src={assets} />
        <br />
        <NavBar changeView={this.changeView}handleSort={this.handleSort} handleSearch={this.handleSearch} changeView={this.changeView}/>
          {this.renderView()}
      </div>


    );
  }
}

export default App;
