import React from "react";
import "../Footer/Footer.css";
import FooterLogo from "../../assets/FooterImages/logo-pergolaroom2-1-pomt600cei3i2iruaqw2gxulp44vv31nnupmf2d7fs.png";
import FooterInstaLogo from "../../assets/FooterImages/instagram (1).png";
import FooterFbLogo from "../../assets/FooterImages/facebook.png";
import { useNavigate } from "react-router-dom";
import blackLogo from "../../assets/FooterImages/blackLogo.png";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GoMail } from "react-icons/go";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  const navigate = useNavigate();

  const iconSize = 16;

  const goToBbqArea = () => {
    navigate("/bbq-area");
  };

  const goToCNCPanelCutter = () => {
    navigate("/cnc-panel-cutter");
  };

  const goToPergolas = () => {
    navigate("/pergolas");
  };

  const goToGlassRooms = () => {
    navigate("/glass-rooms");
  };

  const goToCarParkingPergolas = () => {
    navigate("/car-parking-shades");
  };

  const goToAluminiumDoors = () => {
    navigate("/aluminium-doors");
  };
  const handlePhoneClick = () => {
    window.location.href = "tel:+971585799666";
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:info@pergolasroom.ae";
  };

  return (
    <>
      <footer className="Footer mt-5">
        <div className="container mt-3 py-3 px-lg-5">
          {/* <div className="row px-lg-5 d-flex justify-content-center align-items-center text-center">
            <div className="col-md-6">
              <img
                style={{ maxWidth: "200px" }}
                src={blackLogo}
                className="img-fluid"
                alt="footerMain"
              />

              <p className="py-4 font-face-rr">
                Pergola Rooms Contracting LLC, Your Trusted Experts in Custom
                Pergolas and Outdoor Living. With a decade of experience, we
                bring innovation, craftsmanship, and exceptional design to
                transform your outdoor space into a haven of beauty and
                functionality. Discover the Pergolarooms.ae, difference today.
              </p>
            </div>
          </div> */}

          <section className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 pe-lg-4">
                <img
                  style={{ maxWidth: "120px" }}
                  src={blackLogo}
                  className="img-fluid"
                  alt="footerMain"
                />

                <p
                  className="py-4 font-face-rr text-justify"
                  // style={{ textAlign: "justify" }}
                >
                  Pergola Rooms Building Contracting LLC, Your Trusted Experts
                  in Custom Pergolas and Outdoor Living.
                </p>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <h6 className="font-face-rb mb-1">QUICK LINKS</h6>
                <div
                  style={{
                    borderTop: "2px solid #a9a9a9",
                    paddingTop: "10px",
                    width: "60px",
                  }}
                ></div>
                <ul className="mb-4 f-menu">
                  <li className="font-face-rr" onClick={goToGlassRooms}>
                    Glass Rooms
                  </li>
                  <li className="font-face-rr" onClick={goToPergolas}>
                    Pergolas
                  </li>
                  <li className="font-face-rr" onClick={goToBbqArea}>
                    Bar & BBQ Counters
                  </li>
                  <li className="font-face-rr" onClick={goToCNCPanelCutter}>
                    CNC Cut Panel
                  </li>

                  <li className="font-face-rr" onClick={goToAluminiumDoors}>
                    Doors & Fences
                  </li>

                  <li className="font-face-rr" onClick={goToCarParkingPergolas}>
                    Car Parking Pergolas
                  </li>

                  {/* <li className="font-face-rr" onClick={goToPergolas}>
                    Pergolas
                  </li>
                  <li className="font-face-rr" onClick={goToPergolasRoom}>
                    Pergola Room
                  </li>
                  <li className="font-face-rr" onClick={goToBbqArea}>
                    BBQ Area
                  </li>
                  <li className="font-face-rr" onClick={goToVillaExtension}>
                    Villas Extension
                  </li> */}
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12">
                <h6 className="font-face-rb mb-1">STAY CONNECTED</h6>
                <div
                  style={{
                    borderTop: "2px solid #a9a9a9",
                    paddingTop: "10px",
                    width: "60px",
                  }}
                ></div>
                <ul
                  style={{ listStyle: "none", paddingTop: "10px" }}
                  className=" d-flex align-items-center"
                >
                  <BsTelephone size={iconSize} />
                  <li className="font-face-rr ms-2" onClick={handlePhoneClick}>
                    +971585799666
                  </li>
                </ul>

                <ul
                  style={{ listStyle: "none" }}
                  className="d-flex align-items-center"
                >
                  <GoMail size={iconSize} />
                  <li className="font-face-rr ms-2" onClick={handleEmailClick}>
                    info@pergolasroom.ae
                  </li>
                </ul>

                <ul
                  style={{ listStyle: "none" }}
                  className="d-flex align-items-center"
                >
                  <AiOutlineFacebook color="#202529" size={iconSize} />

                  <li className="font-face-rr ms-2">facebook</li>
                </ul>

                <ul
                  style={{ listStyle: "none" }}
                  className="d-flex align-items-center"
                >
                  <CiInstagram color="#202529" size={iconSize} />
                  <a
                    href="https://www.instagram.com/pergolarooms.ae/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="font-face-rr ms-2">Instagram</li>
                  </a>
                </ul>

                {/* <h6 className="font-face-rb pt-3 mb-1">Follow Us</h6> */}
                {/* <div
                  style={{
                    borderTop: "2px solid #a9a9a9",
                    paddingTop: "10px",
                    width: "60px",
                  }}
                ></div> */}

                {/* <ul
                  style={{ listStyle: "none" }}
                  className="list-unstyled mb-2"
                >
                  <li className="d-sm-flex">
                    <a>
                      <AiOutlineFacebook color="#202529" size={iconSize} />
            
                    </a>
                    <a
                      href="https://www.instagram.com/pergolarooms.ae/"
                      target="_blank"
                    >
                    
                      <CiInstagram
                        className="ms-2"
                        color="#202529"
                        size={iconSize}
                      />
                    </a>
                  </li>
                </ul> */}
              </div>

              {/* <div className="col-lg-3 col-md-12 sm-12">
                <h6 className="font-face-rb">Email Us</h6>

                <ul style={{ listStyle: "none" }} className="mb-4">
                  <li className="font-face-rr" onClick={handleEmailClick}>
                    info@pergolasroom.ae
                  </li>
                </ul>
              </div> */}

              <div class="col-lg-3 col-md-12 col-sm-12">
                <h6 class="text-uppercase font-face-rb mb-1">Visit Us</h6>
                <div
                  style={{
                    borderTop: "2px solid #a9a9a9",
                    height: "10px",
                    width: "60px",
                  }}
                ></div>

                <ul
                  style={{ listStyle: "none", paddingTop: "10px" }}
                  class="mb-4 d-flex align-items-center"
                >
                  <GoLocation size={iconSize} />
                  <li className="font-face-rr ms-2">
                    Dubai, United Arab Emirates
                  </li>
                </ul>
                <ul
                  style={{ listStyle: "none" }}
                  class="mb-4 d-flex align-items-center"
                >
                  <GoLocation size={iconSize} />
                  <li className="font-face-rr ms-2">
                    Sharjah, United Arab Emirates
                  </li>
                </ul>
              </div>

              {/* <div className="Footer-Social-Icons col-lg-2 col-md-12 col-sm-12">
                <h6 className="font-face-rb">Follow Us</h6>

                <ul
                  style={{ listStyle: "none" }}
                  className="list-unstyled mb-2"
                >
                  <li className="d-sm-flex">
                    <a>
                      <img className="FbLogo" src={FooterFbLogo} alt="fb" />
                    </a>
                    <a
                      href="https://www.instagram.com/pergolarooms.ae/"
                      target="_blank"
                    >
                      <img
                        className="ms-2 InstaLogo"
                        src={FooterInstaLogo}
                        alt="insta"
                      />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </section>
        </div>

        <div className="text-black text-center py-4">
          <div
            style={{
              borderTop: "1px solid black",
              paddingTop: "20px",
            }}
            className="container font-face-rr"
          >
            Copyrights & All Rights Reserved @
            <b className="font-face-rb">
              <a
                href="https://pergolarooms.ae/"
                target="blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                pergolarooms.ae
              </a>
            </b>
            {/* Designed and Developed By <span></span>
            <span class="text-black">
              <b className="font-face-rb">
                <a
                  href="https://media-one-group.com"
                  target="blank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  MEDIA ONE GROUP
                </a>
              </b>
            </span> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
