import React, { Component } from 'react';
import logo from '../images/auth_logo.png';
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
          <div className="main">
              <img src={logo}/> <br />
              Username
              <input className="auth-input" /> <br />
              Password
              <input className="auth-input" /> <br />
              <div>
                  {/* Simulation-2 42E */}
                  <Link to="/dashboard"><button className="light-green">Login</button></Link>
                  <Link to="/dashboard"><button className="dark-green">Register</button></Link>  
              </div>
          </div>
      </div>
    );
  }
}

export default App;
