import React from 'react'
import{ Link, withRouter} from 'react-router-dom'
import logo from '../../assets/logo/instock.svg';

 const Navbar = (props) => {
  
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">
          <img src={logo} alt="logo"/>
        </a>
        <ul className="right">
  
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar)