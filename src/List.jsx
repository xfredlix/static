import React from 'react';

export default class List extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>{this.props.listTitle}</h3>
      </div>
    );
  }
}
