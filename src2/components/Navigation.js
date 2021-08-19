import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'

export default function navigation() {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">YaYabar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
