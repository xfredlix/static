import React, { Component } from 'react';
import BoardThread from './BoardThread.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Static App</h1>
        <BoardThread />
      </div>
    );
  }
}

export default App;
