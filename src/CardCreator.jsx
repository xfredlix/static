import React from 'react';

export default class CardCreator extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: '',
    };

    this.createCard = this.createCard.bind(this);
    this.titleHandler = this.titleHandler.bind(this);
    this.bodyHandler = this.bodyHandler.bind(this);
  }

  createCard() {
    if (this.state.title.length && this.state.body.length) {
      this.props.addCard(this.state);
      this.setState({title: '', body: ''});
    }
  }

  titleHandler(e) {
    this.setState({title: e.target.value});
  }

  bodyHandler(e) {
    this.setState({body: e.target.value});
  }

  render() {
    return (
      <div>
        <input
          value={this.state.title}
          onChange={this.titleHandler}
          placeholder="Card Title"
          />
        <input
          value={this.state.body}
          onChange={this.bodyHandler}
          placeholder="Card Body"
          />
        <button onClick={this.createCard}>Create Card</button>
      </div>
    );
  }
}
