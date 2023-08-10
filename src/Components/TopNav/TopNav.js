import React from "react";
import "../TopNav/TopNav.css";
import arrow from "../../assets/FeaturedImages/leftArrow.png";
import fbLogo from "../../assets/TopNavImages/facebook.png";
import instaLogo from "../../assets/TopNavImages/instagram.png";

const TopNav = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+971585799666";
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:info@pergolasroom.ae";
  };
  return (
    <div class="ltn__header-top-area top-area py-2">
      <div class="container">
        <div class="row">
          <div class="col-7">
            <div class="ltn__top-bar-menu">
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
                    +971585799666
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-5">
            <div class="top-bar-right text-end">
              <div class="ltn__top-bar-menu">
                <div class="ltn__social-media">
                  <ul>
                    <li>
                      <img className="icon-img" src={fbLogo} alt="fb" />
                      <a
                        href="https://www.instagram.com/pergolarooms.ae/"
                        target="_blank"
                      >
                        <img
                          className="icon-img ms-2"
                          src={instaLogo}
                          alt="insta"
                        />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/tuna-theme"
                        title="Instagram"
                      >
                        <i class="fab fa-instagram"></i>
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
