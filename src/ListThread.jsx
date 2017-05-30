import React from 'react';
import List from './List';
import ListCreator from './ListCreator.jsx';

export default class ListThread extends React.Component {
  constructor() {
    super();

    this.state = {
      lists: [],
    };

    this.addList = this.addList.bind(this);
    this.changeCard = this.changeCard.bind(this);
  }

  addList(listTitle) {
    const newState = Object.assign({}, this.state);
    newState.lists.push(listTitle);
    this.setState(newState);
  }

  addToList(index) {
    const newState = Object.assign({}, this.state);
    console.log(newState.lists[index], index)
    newState.lists[index].push(this.state.cardToBeChanged);
    this.setState(newState);
  }

  changeCard(card) {
    this.setState({
      changeList: true,
      cardToBeChanged: card
    })
    console.log(card)
  }

  renderLists() {
    return (
      this.state.lists.map((list, idx) => {
        return (<div key={idx}> 
          <List listTitle={list} changeCard={this.changeCard} />
          {this.renderSelectList(idx)}
          </div>
        )
      })
    );
  }

  renderSelectList(index) {
    if (this.state.changeList && this.state.cardToBeChanged) return (
      <button onClick={this.addToList.bind(this, index)}> add card to this list </button>
      )
  }

  render() {
    return (
      <div className="panel panel-default list-container">
        {this.renderLists()}

        <ListCreator addList={this.addList}/>
      </div>
    );
  }
}
