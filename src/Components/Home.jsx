import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React-Firebase</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/signup">Sign Up </Link>
             <Link to="/signin">Sign In </Link>
             <Link to="/dashboard">DashBoard</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

    </>
  )
}

export default Home