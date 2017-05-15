import React from 'react';

export default class Card extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.body}</p>
      </div>
    );
  }
}
