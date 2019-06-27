import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../Home/Home';
import Profile from '../Profile/ProfileComponent';
import SignUp  from '../../containers/Signup';
import Login from '../../containers/Login';

class App extends Component {

  render(){
    return(
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>

        </Router>
      
      </Provider>
    
    );
  }
}

export default App;
