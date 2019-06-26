import React, {Component} from 'react';
//import components
import Navbar from '../Navbar';

class Home extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <h1>Ireporter is your one point stop for reporting red flags and incidents</h1>
      </div>
    );
  }
}

export default Home;

