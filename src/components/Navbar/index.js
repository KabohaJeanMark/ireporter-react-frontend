import React, { Component } from 'react';
import '../Navbar/Navbar.scss';

class Navbar extends Component {
  render(){
    return(
      <div className="Navbar" align="right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/signup">Signup</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    );
  }
}


export default Navbar;