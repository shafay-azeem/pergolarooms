import React, { useEffect, useRef } from "react";
import "../Contact/ContactForm.css";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9d9j4hj",
        "template_p8svu29",
        form.current,
        "YYbvr8T3T2noQxmNT"
      )
      .then(
        (result) => {
          // console.log(result.text);
          // console.log("Email Send");
          form.current.reset();
          window.alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
            {/* <h2 class="section-subtitle py-1 font-face-rr">REACH US OUT</h2> */}
            <p class="section-description font-face-rr">
              Contact Pergolarooms Today for Exceptional Outdoor Living
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
              ref={form}
              onSubmit={sendEmail}
            >
              <div class="form-group">
                <label class="control-label font-face-rr" for="email">
                  Your Email Goes Here
                </label>
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  name="user_email"
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
                <button
                  class="btn-send font-face-rb"
                  type="submit"
                  value="Send"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
