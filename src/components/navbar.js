import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const NavBar = () => {
  return(
  <div className="fullNav">
    <nav className="navButtons">
        <div className="nav-wrapper red darken-4">
      <a href="#" className="brand-logo right">Howlr</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/reminders/">Current Reminders</Link> </li>
      </ul>
    </div>
  </nav>
  </div>
  )
}

export default NavBar