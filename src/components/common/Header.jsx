import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#F1582A' };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" activeStyle={activeStyle} className="nav-link" exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/courses" activeStyle={activeStyle} className="nav-link">
        Courses
      </NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
        About
      </NavLink>
    </nav>
  );
};

export default Header;
