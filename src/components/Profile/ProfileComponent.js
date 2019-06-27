import React, {Component} from 'react';
import Navbar from '../Navbar';

class Profile extends Component {
  render(){
    return(
      <div className="profile">
        <Navbar />
        <h1>Welcome to Ireporter</h1>
      </div>
    );
  }
}


export default Profile;