import React from 'react'
import { Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png'

export const Header = () => {
  return (
     <Navbar expand="lg" className="bg-gradient-to-r from-[#582884] to-[#EC1E7A] mb-5">
      <Container className='flex py-4 px-8 justify-between items-center'>
        <Navbar.Brand className='w-1/6' href='#home'>
          <img  src={logo} alt=""/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex space-x-4 text-white font-semibold">
            <Nav.Link href="#home">Listar Buses</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
