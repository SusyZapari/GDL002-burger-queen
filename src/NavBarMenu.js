import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, Navbar, NavbarBrand, DropdownMenu, DropdownItem, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
export const NavBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand style={{color: 'white'}}>
      <Link to="/">BurgerQueen</Link>
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink style={{color: 'white'}}>
              <Link to="/menu">Mesero</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color: 'white'}}>Cocina</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}