import React, { Component } from 'react';
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
