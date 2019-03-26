import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import ViewComponent from './ViewComponent';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <ViewComponent />
      </div>
    );
  }
}

export default App;
