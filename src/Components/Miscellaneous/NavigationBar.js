import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Miscellaneous/NavigationBar.css";

const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="light">
        <Container fluid className="py-2">
          <Navbar.Brand href="#home">PERGOlASROOMS</Navbar.Brand>
          <div style={{ cursor: 'pointer' }} className="me-2" onClick={handleShow}>
            SearchIcon
          </div>
        </Container>
      </Navbar>

      <Offcanvas style={{ backgroundColor: '#1b1b1b' }} show={show} placement="top">
        <Offcanvas.Header>
          <Offcanvas.Title style={{ color: 'white' }}>Corbesier</Offcanvas.Title>
          <Button onClick={handleClose} className="me-2">
            Close
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavigationBar;