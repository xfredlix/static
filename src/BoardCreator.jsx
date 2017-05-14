import React from 'react';

export default class BoardCreator extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.boardTitleHandler = this.boardTitleHandler.bind(this);
    this.createBoard = this.createBoard.bind(this);
  }

  createBoard() {
    if (this.state.title.length !== 0) {
      this.props.addBoard(this.state.title);
      this.setState({title: ''});
    }
  }

  boardTitleHandler(e) {
    this.setState({title: e.target.value});
  }

  render() {
    return(
      <div>
        <h1>Create Board</h1>

        <input
          value={this.state.title}
          onChange={this.boardTitleHandler}
          placeholder="Title"
          />
        <button onClick={this.createBoard}>Create</button>
      </div>
    );
  }
}
