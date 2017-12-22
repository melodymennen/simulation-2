import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './index.css';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
