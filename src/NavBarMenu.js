import React, { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, Navbar, NavbarBrand, DropdownMenu, DropdownItem, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
export const NavBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand style={{color: 'white'}} href="/">BurgerQueen</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink style={{color: 'white'}} href="/menu">Mesero</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color: 'white'}}>Cocina</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}