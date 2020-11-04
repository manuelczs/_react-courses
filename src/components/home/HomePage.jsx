import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="jumbotron">
    <h1>Administration</h1>
    <p>React, Redux and React-Router for responsive web apps.</p>
    <Link to="/aboutx" className="btn btn-primary btn-lg">
      Learn Morex
    </Link>
  </div>
);

export default HomePage;
