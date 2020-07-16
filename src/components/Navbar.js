import React from "react"
import { Link } from "gatsby"

const Navbar = props => {
  return (
    <header className="header">
    <div className="container wrapper">
      <div className="logo">OLAWUMI-OLUFEMI</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/">The Proposal</Link>
          </li>
        </ul>
      </nav>
    </div>
    </header>
  )
}
export default Navbar
