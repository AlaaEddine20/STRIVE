import React from 'react'
import { Navbar, Nav } from 'react-bootstrap' 

const NavBar = () => {

    return (
       
          <Navbar className="d-flex justify-content-lg-between" style={{ backgroundColor: '#201e1f' }} >
            <Navbar.Brand style={{ color: '#feefdd', fontFamily: 'Pacifico' }} href="#home">My Book Store</Navbar.Brand>
              <Nav>
                <Nav.Link style={{ color: '#faaa8d' }} href="#home">Home</Nav.Link>
                <Nav.Link style={{ color: '#faaa8d' }} href="#features">About</Nav.Link>
                <Nav.Link style={{ color: '#faaa8d' }} href="#pricing">Browse</Nav.Link>
              </Nav>
          </Navbar>
        
    )
}

export default NavBar