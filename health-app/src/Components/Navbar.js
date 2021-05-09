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
        <NavLink to = "/" className="h1 company-name" >
            Medic
          </NavLink>
        <NavBtn>
          <NavBtnLink to='/login'className="h3">Register</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;


