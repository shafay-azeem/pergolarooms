import React, { useEffect } from "react";
import "../Contact/ContactForm.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section
      class="section-padding section-dark"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4 class="section-title font-face-rb">CONTACT US</h4>
            <h2 class="section-subtitle py-1 font-face-rr">REACH US OUT</h2>
            <p class="section-description font-face-rr">
              Contact Pergolarooms.ae Today for Exceptional Outdoor Living
              Solutions. Transform your space with our custom pergolas, patio
              covers, and outdoor living areas. Experience our craftsmanship and
              dedication. Connect with us now for a consultation and start
              creating your dream outdoor oasis
            </p>

            <div class="find-widget py-2 font-face-rr">
              Dubai, United Arab Emirates
            </div>
            <div class="find-widget font-face-rr">
              Sharjah, United Arab Emirates
            </div>
          </div>
          <div class="col-md-6">
            <form
              class="shake"
              role="form"
              // method="post"
              id="contactForm"
              name="contact-form"
            >
              <div class="form-group">
                <label class="control-label font-face-rr" for="email">
                  Your Email Goes Here
                </label>
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  name="email"
                />
              </div>

              <div class="form-group">
                <label for="message" class="control-label font-face-rr">
                  Type Your Message Here
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <div class="form-submit mt-5 text-center">
                <button class="btn-send font-face-rb">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
