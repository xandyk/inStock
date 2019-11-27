import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/instock.svg';


const Navbar = (props) => {
  console.log(props);
  let inventoryClass
  let locationsClass
  if (props.match.path === '/locations') {
    inventoryClass = 'inactive'
    locationsClass = 'active'
  } else {
    inventoryClass = 'active'
    locationsClass = 'inactive'
  }
  return (
    <div className="nav">
      <img className="nav__logo" src={logo} alt="logo" />
      <nav className="nav__wrapper">
        <ul className="nav__menu">
          <li className={`nav__list-inventory nav__list-inventory--${inventoryClass}`}>
            <Link className={`nav__list-link--${inventoryClass}`} to="/inventory">Inventory</Link>
          </li>
          <li className={`nav__list-locations nav__list-locations--${locationsClass}`}>
            <Link className={`nav__list-link--${locationsClass}`} to="/locations">Locations</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar