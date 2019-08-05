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
        <ul>
          <li>
            <Link to="/">Stores</Link>
          </li>
          <li>
            <Link to="/add-store">Add Store</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
