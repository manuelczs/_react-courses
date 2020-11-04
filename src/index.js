import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App.jsx';
import './index.css';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
import { courses, newCourse, authors } from './redux/data';

const initialState = { courses };

const store = configureStore(initialState);

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('app')
);
