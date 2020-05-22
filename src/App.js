import React, { Component } from 'react';
// import logo from './logo.svg';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery'
import 'bootstrap/dist/js/bootstrap';

import './App.scss'
import Home from './home/home';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faEnvelope, faPhone)

class App extends Component {

  render() {
    return (
      <div className="App app-background">
        <header className="App-header">
          <Router>
              <Route path="/" exact render={() => <Redirect to="/home"/>} />
              <Route path="/home/" exact component={Home}/>
          </Router>
        </header>
      </div>
    );
  }
}


export default App;
