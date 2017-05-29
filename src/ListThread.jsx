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
  }

  addList(listTitle) {
    const newState = Object.assign({}, this.state);
    newState.lists.push(listTitle);
    this.setState(newState);
  }

  addToList(index) {
    const newState = Object.assign({}, this.state);
    newState.lists[index].push(this.state.cardToBeChanged);
    this.setState(newState);
  }

  changeCard(card) {
    this.setState({
      changeList: true,
      cardToBeChanged: card
    })
  }

  renderLists() {
    return (
      this.state.lists.map((list, idx) => {
        return (<div> 
          <List key={idx} listTitle={list} />
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
