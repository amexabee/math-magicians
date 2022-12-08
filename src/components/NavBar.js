import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px',
  };

  const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: '10px',
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ alignSelf: 'center' }}>Math Magicians</h2>
      <ul style={ulStyle}>
        <li style={{ paddingRight: '50px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ paddingRight: '50px' }}>
          <Link to="calculator">Calculator</Link>
        </li>
        <li style={{ paddingRight: '50px' }}>
          <Link to="quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
