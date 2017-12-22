import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import routes from './router';
import './index.css';



class App extends Component {
  render() {
    return (
      <div>
        { routes }
      </div>
    );
  }
}

export default App;
