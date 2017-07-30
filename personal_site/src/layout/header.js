import React, { Component } from 'react';
import '../App.css';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'


class Header extends Component {
  render() {
    return (
      <div className='navbar'>
          <Navbar inverse collapseOnSelect>
   <Navbar.Header>
     <Navbar.Brand>
       <a href="#">React-Bootstrap</a>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>
     <Nav>
       <NavItem eventKey={1} href="#">Link</NavItem>
       <NavItem eventKey={2} href="#">Link</NavItem>
     </Nav>
     <Nav pullRight>
       <NavItem eventKey={1} href="#">Link Right</NavItem>
       <NavItem eventKey={2} href="#">Link Right</NavItem>
     </Nav>
   </Navbar.Collapse>
 </Navbar>

      </div>
    );
  }
}

export default Header;
