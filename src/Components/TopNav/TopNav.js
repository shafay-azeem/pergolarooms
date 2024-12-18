import React from "react";
import "../TopNav/TopNav.css";
import fbLogo from "../../assets/TopNavImages/facebook.png";
import instaLogo from "../../assets/TopNavImages/instagram.png";

const TopNav = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+971567466996";
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:info@pergolasroom.ae";
  };
  return (
    <div className="ltn__header-top-area top-area py-2">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="ltn__top-bar-menu">
              <ul>
                <li className="d-none d-lg-block d-md-block">
                  <a onClick={handleEmailClick}>
                    <i class="icon-mail"></i>
                    info@pergolarooms.ae
                  </a>
                </li>
                <li>
                  <a onClick={handlePhoneClick}>
                    <i class="icon-placeholder"></i>
                    +971567466996
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <div className="top-bar-right text-end">
              <div className="ltn__top-bar-menu">
                <div className="ltn__social-media">
                  <ul>
                    <li>
                      <img className="icon-img" src={fbLogo} alt="fbLogo" />
                      <a
                        href="https://www.instagram.com/pergolarooms.ae/"
                        target="_blank"
                      >
                        <img
                          className="icon-img ms-2"
                          src={instaLogo}
                          alt="instaLogo"
                        />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/tuna-theme"
                        title="instagram.com/tuna-theme"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
