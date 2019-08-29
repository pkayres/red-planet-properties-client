import React from 'react';

class UserHeader extends React.Component {
  render(){
    return (
      <div class="login">
        <h2 class="h1">{this.props.username}</h2>
        <button class="button1" onClick={()=> this.props.logOut(this.props.username)}>LOGOUT</button>
      </div>
    );
  }
}

export default UserHeader;
