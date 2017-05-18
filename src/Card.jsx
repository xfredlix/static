import React from 'react';

export default class Card extends React.Component {
  render() {
    return(
      <div draggable="true">
        <p>{this.props.title}</p>
        <p>{this.props.body}</p>
      </div>
    );
  }
}
