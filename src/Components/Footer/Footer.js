import React from "react";
import "../Footer/Footer.css";
import FooterLogo from "../../assets/FooterImages/logo-pergolaroom2-1-pomt600cei3i2iruaqw2gxulp44vv31nnupmf2d7fs.png";
import FooterInstaLogo from "../../assets/FooterImages/instagram (1).png";
import FooterFbLogo from "../../assets/FooterImages/facebook.png";


const Footer = () => {
  return (
    <>
      <footer class="Footer">
        <div class="container mt-3 py-3">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col-md-6">
              <img src={FooterLogo} className="img-fluid" alt="footerMain" />
              <p className="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime autem, non magni nesciunt fuga ea recusandae minus sequi ex impedit velit dolores, quaerat omnis excepturi sunt molestias nobis fugiat sed.</p>
            </div>
          </div>


          <section class="container">
            <div class="row">
              <div class="col-lg-2 col-md-12 col-sm-12">
                <h5>Quick Links</h5>
                <ul class="mb-4">
                  <li className="py-1">
                    <span href="#!" class="">Pergolas</span>
                  </li>
                  <li className="py-1">
                    <span href="#!" class="">Pergola Room</span>
                  </li>
                  <li className="py-1">
                    <span href="#!" class="">BBQ Area</span>
                  </li>
                  <li className="py-1">
                    <span href="#!" class="">Villas Extension</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-12 col-sm-12">
                <h5 class="">Call Us</h5>
                <ul style={{ listStyle: 'none' }} class="mb-4">
                  <li>
                    <span href="#!" class="">+971585799666</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-12 sm-12">
                <h5>Email Us</h5>

                <ul style={{ listStyle: 'none' }} class="mb-4">
                  <li>
                    <span href="#!" class="">info@pergolasroom.ae</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-12 col-sm-12">
                <h5 class="text-uppercase">Visit Us</h5>

                <ul style={{ listStyle: 'none' }} class="mb-4">
                  <li className="py-1">
                    <span href="#!" class="">Dubai, United Arab Emirates</span>
                  </li>
                  <li className="py-1">
                    <span href="#!" class="">Sharjah, United Arab Emirates</span>
                  </li>
                </ul>
              </div>

              <div class="Footer-Social-Icons col-lg-2 col-md-12 col-sm-12">
                <h5 class="">Follow Us</h5>

                <ul style={{ listStyle: 'none' }} class="list-unstyled mb-2">
                  <li className="d-sm-flex">
                    <img className="FbLogo" src={FooterFbLogo} alt="fb" />
                    <img className="ms-2 InstaLogo" src={FooterInstaLogo} alt="insta" />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div class="bg-black text-white text-center py-4">
          <div className="container">
            Copyrights & All Rights Reserved @ <b>pergolasroom.ae</b> Designed and Developed By <span></span>
            <span class="text-white"><b>MEDIA ONE GROUP</b></span>
          </div>
        </div>
      </footer>
    </>

  );
};

export default Footer;