import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </header>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/add-store">Add Store</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
