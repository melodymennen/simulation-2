import React, { Component } from 'react';
import logo from '../images/auth_logo.png';
import './index.css';



class App extends Component {
  render() {
    return (
      <div>
          <div className="main">
              <img src={logo}/>>
              Houser
              Username<input/>
              Password<input/>
              <button className="light-green">Login</button>
              <button className="dark-green">Register</button>
          </div>
      </div>
    );
  }
}

export default App;
