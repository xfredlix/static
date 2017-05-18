import React, { Component } from 'react';
import ListThread from './ListThread.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Static App</h1>
        <ListThread />
      </div>
    );
  }
}

export default App;
