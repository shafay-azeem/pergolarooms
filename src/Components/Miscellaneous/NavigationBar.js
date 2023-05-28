import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Miscellaneous/NavigationBar.css";
import { BsList, BsSearch, BsXLg } from "react-icons/bs";

const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="light">
        <Container fluid className="py-2">
          <Navbar.Brand href="#home">PERGOlASROOMS</Navbar.Brand>
          <div className="icons">
            <BsSearch size={28} />
            <BsList onClick={handleShow} size={30} className="ms-3" />
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} placement="top">
        <Offcanvas.Header>
          <Offcanvas.Title >Pergolasroom</Offcanvas.Title>
          <div className="icons">
            <span className="text-white">Close</span>
            <BsXLg color="white" onClick={handleClose} size={25} className="ms-3" />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id="Floating-Menu" className="container text-white">
            <div className="row">
              <div className="col-lg-3">
                Germany-<br />
                785 15th Street, <br /> Office 478 <br /> Berlin, De 81566
              </div>
              <div className="col-lg-3 pb-2">
                <br />
                <br />+1840 841 25 69  <br /> info@email.com
              </div>
              <div id="nav-List" className="col-lg-6">
                <ul className="pb-2 items">Home</ul>
                <ul className="pb-2 items">Expertise</ul>
                <ul className="pb-2 items">Portfolio</ul>
                <ul className="pb-2 items">About</ul>
                <ul className="pb-2 items">Shop</ul>
                <ul className="pb-2 items">Blog</ul>
              </div>
            </div>
            <hr className="Horizontal-line text-white mt-5" />

            <div className="floating-icons text-white">
              <span>Facebook Icon</span>
              <span className="ms-2">Twitter Icon</span>
              <span className="ms-2">Dribble Icon</span>
              <span className="ms-2">Instagram Icon</span>
            </div>
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavigationBar;