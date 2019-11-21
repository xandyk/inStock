import React from 'react'
import{ Link } from 'react-router-dom'
import logo from '../../assets/logo/instock.svg';


 const Navbar = () => {
  
  return (
    <div className="nav">
      <img className="nav__logo" src={logo} alt="logo"/>
      <nav className="nav__wrapper">
        <ul className="nav__menu">
          <li className="nav__list-inventory">
            <Link className="nav__list-inventory active" to="/inventory">Inventory</Link>
          </li>
          <li className="nav__list-locations">
            <Link className="nav__list-locations inactive" to="/locations">Locations</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar