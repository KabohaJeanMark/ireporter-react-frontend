import React, {Component} from 'react';
//import components
import Navbar from '../Navbar';

class Home extends Component {
  render(){
    return(
      <div className="home">
        <Navbar />
        <h1>Ireporter is your one point stop for reporting red flags and incidents</h1>
      </div>
    );
  }
}

export default Home;

