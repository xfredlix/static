import React from 'react';

export default class ListCreator extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.listTitleHandler = this.listTitleHandler.bind(this);
    this.createList = this.createList.bind(this);
  }

  listTitleHandler(e) {
    this.setState({title: e.target.value});
  }

  createList() {
    if (this.state.title.length !== 0) {
      this.props.addList(this.state.title);
      this.setState({title: ''});
    }
  }

  render() {
    return (
      <div>
        <h3>Create List</h3>
        <input
          value={this.state.title}
          onChange={this.listTitleHandler}
          placeholder="List Title"
          />
        <button onClick={this.createList}>Create List</button>
      </div>
    );
  }
}
