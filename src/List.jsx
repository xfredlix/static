import React from 'react';
import CardThread from './CardThread.jsx';

export default class List extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.listTitle}</h3>

        <CardThread />
      </div>
    );
  }
}
