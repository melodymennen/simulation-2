import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../images/header_logo.png'

// Simulation-2 38D
const Header = () => {
    return (
      <header>
        <div>
          <div className="logo">
          <img src={logo}/>
          <strong>Houser</strong> Dashboard
          </div>
          <div className="logout">
            {/* <Link to="/">Logout</Link> */}
            Logout
          </div>
        </div>
      </header>
    );
  }

export default Header;
