import React from 'react';
import Board from './Board.jsx';

export default class BoardThread extends React.Component {
  constructor() {
    super();

    this.state = {
      boards: [
        'board1',
        'board2',
      ]
    };
  }

  renderBoards() {
    return(
      this.state.boards.map((board, idx) => {
        return <Board key={idx} boardTitle={board} />;
      })
    );
  }

  render() {
    return(
      <div>
        {this.renderBoards()}
      </div>
    );
  }
}
