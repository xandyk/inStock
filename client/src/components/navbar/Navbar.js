import React from 'react'
import{ Link } from 'react-router-dom'
import logo from '../../assets/logo/instock.svg';


 const Navbar = () => {
  
  return (
    <div className="nav-container">
      <img className="nav-logo" src={logo} alt="logo"/>
      <ul>
          <li>
            <Link to="/inventory"></Link>
          </li>
          <li>
            <Link to="/locations"></Link>
          </li>
        </ul>
    </div>
  );
}

export default Navbar