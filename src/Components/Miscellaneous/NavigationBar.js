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
import logoblack from "../../assets/NavgigationBarImages/whit.png";
import FooterLogo from "../../assets/FooterImages/whiteLogo.png";
import logowhite from "../../assets/NavgigationBarImages/whit.png";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const goToBbqArea = () => {
    navigate("/bbq-area/");
    setShow(false);
  };

  const goToCNCPanelCutter = () => {
    navigate("/cnc-panel-cutter/");
    setShow(false);
  };

  const goToPergolas = () => {
    navigate("/pergolas/");
    setShow(false);
  };

  const goToGlassRooms = () => {
    navigate("/glass-rooms/");
    setShow(false);
  };

  const goToCarParkingPergolas = () => {
    navigate("/car-parking-shades/");
    setShow(false);
  };

  const goToAluminiumDoors = () => {
    navigate("/aluminium-doors/");
    setShow(false);
  };

  const goToHome = () => {
    navigate("/");
    setShow(false);
  };

  const goToAboutUs = () => {
    navigate("/about-us/");
    setShow(false);
  };

  function handleClick() {
    const element = document.getElementById("contact-us");
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setShow(false);
  }

  return (
    <>
      <Navbar
        className="myClass"
        style={{
          backgroundColor: "transparent",
          zIndex: "100",
        }}
      >
        <Container className="py-2">
          <Navbar.Brand href="/" className="font-face-rb">
            <img
              src={FooterLogo}
              className="img-fluid"
              style={{ maxWidth: "105px" }}
            />
          </Navbar.Brand>

          <div className="icons">
            <img
              onClick={handleShow}
              src={menuIcon}
              alt="menuIcon"
              className="ms-3"
            />
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} placement="top">
        <Offcanvas.Header>
          <Offcanvas.Title>
            <img
              src={FooterLogo}
              className="img-fluid"
              style={{ maxWidth: "200px" }}
              onClick={goToHome}
            />
          </Offcanvas.Title>
          <div className="icons">
            <span className="font-face-rr">Close</span>
            <img
              src={closeIcon}
              alt="close"
              className="ms-2"
              onClick={handleClose}
            />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id="Floating-Menu" className="container">
            <div className="row">
              <div className="first col-lg-2 font-face-rb ">
                Call Us <br />
                <small className="font-face-rr">+971567466996</small>
              </div>
              <div className="second col-lg-2 pb-2 font-face-rb ">
                Email Us <br />
                <small className="font-face-rr">info@pergolasroom.ae</small>
              </div>
              <div className="third col-lg-3 pb-2 font-face-rb ">
                Visit Us
                <br />
                <small className="font-face-rr ">
                  Dubai, United Arab Emirates
                </small>
                <br />
                <small className="font-face-rr ">
                  Sharjah, United Arab Emirates
                </small>
              </div>
              <div id="nav-List" className="col-lg-5">
                <ul className="items font-face-rb" onClick={goToHome}>
                  Home
                </ul>
                <ul className="items font-face-rb" onClick={goToAboutUs}>
                  About
                </ul>
                <ul className="items font-face-rb" onClick={goToGlassRooms}>
                  Glass Rooms
                </ul>
                <ul className="items font-face-rb" onClick={goToPergolas}>
                  Pergolas
                </ul>
                <ul className="items font-face-rb" onClick={goToBbqArea}>
                  Bar & BBQ Counters
                </ul>

                <ul className="items font-face-rb" onClick={goToCNCPanelCutter}>
                  CNC Cut Panel
                </ul>

                <ul className="items font-face-rb" onClick={goToAluminiumDoors}>
                  Doors & Fences
                </ul>

                <ul
                  className="items font-face-rb"
                  onClick={goToCarParkingPergolas}
                >
                  Car Parking Pergolas
                </ul>

                <nav>
                  <ul className="items font-face-rb" onClick={handleClick}>
                    Contact
                  </ul>
                </nav>
              </div>
            </div>
            <hr className="Horizontal-line mt-5" />

            <span className="font-face-rr">Follow Us</span>
            <div className="floating-icons py-2 d-flex flex-row">
              <img className="pb-2 ms-2" src={fb} alt="fb" />
              <a
                href="https://www.instagram.com/pergolarooms.ae/"
                target="_blank"
              >
                <img className="pb-2 ms-2" src={insta} alt="insta" />
              </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;
