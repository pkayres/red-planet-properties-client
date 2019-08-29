import React, { Component } from 'react';

class CreateForm extends React.Component {

  state = {
      location: '',
      description: '',
      image: '',
      price: '',
    }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/listings', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        "location": this.state.location,
          "description": this.state.description,
          "image": this.state.image,
          "price": this.state.price
        })
    }).then(response => response.json())
      .then(listing => {
        this.props.addNewListing(listing)
        this.props.handleSubmit()
      })
  }

  render() {
    return (
      <div>
        <h3 className="header" >NEW LISTING</h3>
        <form class="form2"onSubmit={this.handleSubmit}>
          <label type="form">LOCATION</label><br></br>
            <input type="text" fluid label="location" placeholder="location" name="location" value={this.state.location} onChange={this.handleInput}/><br></br>
          <label type="form">DESCRIPTION</label><br></br>
            <textarea type="text"fluid label="" placeholder="description" name="description" value={this.state.description} onChange={this.handleInput}></textarea><br></br>
          <label type="form">PICTURE</label><br></br>
            <input type="text"fluid label="picture" placeholder="picture" name="image" value={this.state.image} onChange={this.handleInput}/><br></br>
          <label type="form">PRICE</label><br></br>
            <input type="text"fluid label="price" placeholder="price" name="price" value={this.state.price} onChange={this.handleInput}/><br></br>
          <button class="button3">Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateForm;
