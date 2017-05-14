import React from 'react';

export default class Board extends React.Component {

  render() {
    return(
      <div>
        <h1>{this.props.boardTitle}</h1>
      </div>
    );
  }
}
