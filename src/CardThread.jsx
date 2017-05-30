import React from 'react';
import Card from './Card.jsx';
import CardCreator from './CardCreator.jsx';

export default class CardThread extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };

    this.addCard = this.addCard.bind(this);
  }

  addCard(card) {
    const newState = Object.assign({}, this.state);
    newState.cards.push(card);
    this.setState(newState);
  }

  renderCards() {
    return (
      this.state.cards.map((card, idx) => {
        return <Card key={idx} title={card.title} body={card.body} changeCard={this.props.changeCard}/>;
      })
    );
  }

  render() {
    return(
      <div>
        {this.renderCards()}

        <CardCreator addCard={this.addCard}/>
      </div>
    );
  }
}
