import React from "react";
import "../Footer/Footer.css";
import FooterLogo from "../../assets/FooterImages/logo-pergolaroom2-1-pomt600cei3i2iruaqw2gxulp44vv31nnupmf2d7fs.png";
import FooterInstaLogo from "../../assets/FooterImages/instagram (1).png";
import FooterFbLogo from "../../assets/FooterImages/facebook.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToPergolas = () => {
    navigate("/pergolas");
  };

  const goToBbqArea = () => {
    navigate("/bbq-area");
  };

  const goToVillaExtension = () => {
    navigate("/villa-extensions");
  };

  const goToPergolasRoom = () => {
    navigate("/pergolas-room");
  };

  return (
    <>
      <footer className="Footer mt-5">
        <div className="container mt-3 py-3 px-lg-5">
          <div className="row px-lg-5 d-flex justify-content-center align-items-center text-center">
            <div className="col-md-6">
              <img src={FooterLogo} className="img-fluid" alt="footerMain" />

              <p className="py-4 font-face-rr">
                PERGOLAROOMS, Your Trusted Experts in Custom Pergolas and Outdoor Living. With a decade of experience, we bring innovation, craftsmanship, and exceptional design to transform your outdoor space into a haven of beauty and functionality. Discover the PERGOLAROOMS difference today.
              </p>
            </div>
          </div>

          <section className="container">
            <div className="row">
              <div className="col-lg-2 col-md-12 col-sm-12">
                <h6 className="font-face-rb">Quick Links</h6>
                <ul className="mb-4">
                  <li className="font-face-rr" onClick={goToPergolas}>
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
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-12 col-sm-12">
                <h6 className="font-face-rb">Call Us</h6>
                <ul style={{ listStyle: "none" }} className="mb-4">
                  <li className="font-face-rr">+971585799666</li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 sm-12">
                <h6 className="font-face-rb">Email Us</h6>

                <ul style={{ listStyle: "none" }} className="mb-4">
                  <li className="font-face-rr">info@pergolasroom.ae</li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-12 col-sm-12">
                <h6 class="text-uppercase font-face-rb">Visit Us</h6>

                <ul style={{ listStyle: "none" }} class="mb-4">
                  <li className="font-face-rr">Dubai, United Arab Emirates</li>
                  <li className="font-face-rr">
                    Sharjah, United Arab Emirates
                  </li>
                </ul>
              </div>

              <div className="Footer-Social-Icons col-lg-2 col-md-12 col-sm-12">
                <h6 className="font-face-rb">Follow Us</h6>

                <ul
                  style={{ listStyle: "none" }}
                  className="list-unstyled mb-2"
                >
                  <li className="d-sm-flex">
                    <img className="FbLogo" src={FooterFbLogo} alt="fb" />
                    <img
                      className="ms-2 InstaLogo"
                      src={FooterInstaLogo}
                      alt="insta"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-black text-white text-center py-4">
          <div className="container font-face-rr">
            Copyrights & All Rights Reserved @
            <b className="font-face-rb">pergolasroom.ae</b> Designed and
            Developed By <span></span>
            <span class="text-white">
              <b className="font-face-rb">
                <a
                  href="https://media-one-group.com"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  MEDIA ONE GROUP
                </a>
              </b>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
