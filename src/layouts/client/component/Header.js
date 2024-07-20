import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/client">Home</Link>
          </li>
          <li>
            <Link to="/client/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
