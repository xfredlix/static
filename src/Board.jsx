import React from 'react';
import ListThread from './ListThread.jsx';

export default class Board extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.boardTitle}</h2>

        <ListThread />
      </div>
    );
  }
}
