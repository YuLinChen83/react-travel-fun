import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Nav = () => (
  <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/schedule'>Schedule</Link></li>
    </ul>
  </nav>
)

export default Nav
