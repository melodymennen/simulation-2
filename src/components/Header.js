import React, { Component } from 'react';
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
            Logout
          </div>
        </div>
      </header>
    );
  }

export default Header;
