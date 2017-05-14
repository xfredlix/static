import React from 'react';
import List from './List';

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

  renderLists() {
    return(
      this.state.lists.map((list, idx) => {
        return <List key={idx} listTitle={list} />;
      })
    );
  }

  render() {
    return(
      <div>
        {this.renderLists()}

        
      </div>
    );
  }
}
