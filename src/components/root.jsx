import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;
