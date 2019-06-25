import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../Home/Home';
import SignUp  from '../../containers/Signup';

class App extends Component {

  render(){
    return(
      <Provider store={store}>
      <ToastContainer />
      <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={SignUp}/>
      </Router>
      
      </Provider>
    
    );
  }
  };

export default App;
