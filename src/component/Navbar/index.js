import React from 'react';
import { Link } from "react-router-dom";



function Navbar() {
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <Link className="navbar-brand" to="#">Jimmy Ngo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar;