import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../home/HomePage.jsx';
import AboutPage from '../about/AboutPage.jsx';
import Header from '../common/Header.jsx';
import ErrorPage from '../common/ErrorPage.jsx';
import CoursesPage from '../courses/CoursesPage.jsx';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
