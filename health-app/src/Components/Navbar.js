import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <div className="h1 company-name" >
            Medic
          </div>
        <NavMenu>
        
          <NavLink to='/' activeStyle  className="h3">
            Home
          </NavLink>
          <NavLink to='/about' activeStyle className="h3">
            About
          </NavLink>
          <NavLink to='/contact-us' activeStyle className="h3">
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'className="h3">Register</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;


