import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CardContext } from "./CardContext";

const Navbar = () => {


  const{cart}=useContext(CardContext);


  return (
    <>
   
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink exact className="navbar-brand font-weight-bold " to="/">
              NadeemIphon's
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/home"
                    >
                    <HomeIcon/>  Home 
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/menu"
                    >
                    <MenuIcon/>  Menu
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                    <InfoIcon/>  About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                   <PermContactCalendarIcon/>   Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/addcard"
                    >
                      <span>{cart.totalItems ? cart.totalItems : 0 }</span>
                   <ShoppingCartIcon/>   cart
                 
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Navbar;

