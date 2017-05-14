import React from 'react';
import ListThread from './ListThread.jsx';

export default class Board extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.boardTitle}</h1>

        <ListThread />
      </div>
    );
  }
}
