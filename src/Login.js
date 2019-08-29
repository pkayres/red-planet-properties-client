import React, { Component } from 'react';

class Login extends Component {

  state = {
    username: '',
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.username)
  }

  render() {
    return (
      <div class="notloggin">
        <form class="form" onSubmit={this.handleSubmit}>
          <input type="login" placeholder="Martian name..." name='username' required="required" onChange={this.handleChange}
            />
          <input type="submit" value="LOG IN"/>
        </form>
      </div>

    );
  }

}

export default Login;
