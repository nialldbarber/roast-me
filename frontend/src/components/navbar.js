import React from 'react'
import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import logo from '~@assets/images/logo.svg'

const Navbar = () => (
  <div className="navbar">
    <header>
      <div className="logo">
        <Link to="/">
        <SVG src={logo} />
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
