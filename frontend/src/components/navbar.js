import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~@assets/images/logo.svg'

const Navbar = () => (
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
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Navbar
