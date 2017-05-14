import React from 'react';
import Board from './Board.jsx';
import BoardCreator from './BoardCreator.jsx';

export default class BoardThread extends React.Component {
  constructor() {
    super();

    this.state = {
      boards: [],
    };

    this.addBoard = this.addBoard.bind(this);
  }

  addBoard(boardTitle) {
    const newState = Object.assign({}, this.state);
    newState.boards.push(boardTitle);
    this.setState(newState);
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

        <BoardCreator addBoard={this.addBoard} />
      </div>
    );
  }
}
