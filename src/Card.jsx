import React from 'react';

export default class Card extends React.Component {

  switchList() {
    let card = {
      title: this.props.title,
      body: this.props.body
    }
    this.props.changeCard(card)
  }

  render() {
    return(
      <div draggable="true">
        <p>{this.props.title}</p>
        <p>{this.props.body}</p>
        <button onClick={this.switchList.bind(this)}> move card </button>
      </div>
    );
  }
}
