import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Miscellaneous/NavigationBar.css";
import menuIcon from "../../assets/NavgigationBarImages/Menu.png";
import searchIcon from "../../assets/NavgigationBarImages/search.png";
import closeIcon from "../../assets/NavgigationBarImages/cr1.png";
import fb from "../../assets/NavgigationBarImages/fb1.png";
import insta from "../../assets/NavgigationBarImages/in1.png";

const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="white">
        <Container fluid className="py-2">
          <Navbar.Brand href="#home" className="font-face-rb">
            PERGOlASROOMS
          </Navbar.Brand>
          <div className="icons">
            <img src={searchIcon} alt="search" />
            <img onClick={handleShow} src={menuIcon} alt="menu" className="ms-3" />
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} placement="top">
        <Offcanvas.Header>
          <Offcanvas.Title>Pergolasroom</Offcanvas.Title>
          <div className="icons">
            <span>Close</span>
            <img src={closeIcon} alt="close" className="ms-2" onClick={handleClose} />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id="Floating-Menu" className="container">
            <div className="row">
              <div className="first col-lg-2">
                Call Us <br />
                <small>+971585799666</small>
              </div>
              <div className="second col-lg-2 pb-2">
                Email Us <br />
                <small>info@pergolasroom.ae</small>
              </div>
              <div className="third col-lg-3 pb-2">
                Visit Us<br />
                <small>Dubai, United Arab Emirates</small>
                <br />
                <small>Sharjah, United Arab Emirates</small>
              </div>
              <div id="nav-List" className="col-lg-5">
                <ul className="pb-2 items">Home</ul>
                <ul className="pb-2 items">About</ul>
                <ul className="pb-2 items">Pergolas Rooms</ul>
                <ul className="pb-2 items">Pergolas</ul>
                <ul className="pb-2 items">BBQ Areas</ul>
                <ul className="pb-2 items">Villa Extension</ul>
                <ul className="pb-2 items">Contact</ul>
              </div>
            </div>
            <hr className="Horizontal-line mt-5" />

            <span>Follow Us</span>
            <div className="floating-icons py-2">
              <img className="pb-2 ms-2" src={fb} alt="fb" />
              <img className="pb-2 ms-2" src={insta} alt="insta" />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavigationBar;