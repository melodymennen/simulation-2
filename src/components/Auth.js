import React, { Component } from 'react';
import logo from '../images/auth_logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUsername, updatePassword } from '../ducks/reducer';



class Auth extends Component {
    // Simulation-2 36I
    constructor(){
        super()

        // Simulation-2 36C
        this.state = {
            username: '',
            password: ''
        }
    }

  render() {
     const {updateUsername, updatePassword} = this.props;
    return (
      <div>
          <div className="main">
              <img src={logo}/> <br />
              Username
              {/* Simulation-2 36J, 37D */}
              <input className="auth-input" onChange={(e) => updateUsername(e.target.value)}/> <br />
              Password
              <input className="auth-input" onChange={(e) => updatePassword(e.target.value)}/> <br />
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

// Simulation-2 43H
function mapStateToProps(state){
    const {username, password} = state;
    return {
        username,
        password
    }
}

// Simulation-2 43C
export default connect(mapStateToProps, {updatePassword, updateUsername})(Auth);