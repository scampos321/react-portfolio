import React from 'react'
import logo from '../logo.jpg'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container">
    <a className="navbar-brand" href="/"><img src={logo} alt="logo..."/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contacts</a>
        </li>
      </ul>
      
    </div>
    </div>
  </nav>
    )
}

export default Navbar
