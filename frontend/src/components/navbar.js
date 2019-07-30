import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/add-store">Add Store</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
