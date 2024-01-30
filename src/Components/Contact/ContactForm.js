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

    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const phoneInput = document.getElementById("phone");

    if (isNaN(phoneInput.value)) {
      alert("Enter Only Numaric Value");
      return;
    }

    if (phoneInput.value.length > 15) {
      alert("Max 15 digits allowed");
      return;
    }

    if (
      emailInput.value === "" ||
      messageInput.value === "" ||
      nameInput.value === "" ||
      phoneInput.value === ""
    ) {
      alert("Please enter all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_qytd3bf",
        "template_tus3c8j",
        form.current,
        "AhaleCQZZJAN12rAj"
      )
      .then(
        (result) => {
          form.current.reset();
          window.alert("Email sent successfully!");
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className="section-padding section-dark"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="section-title font-face-rb">CONTACT US</h4>
            <p className="section-description font-face-rr">
              Contact Pergolarooms Today for Exceptional Outdoor Living
              Solutions. Transform your space with our custom pergolas, patio
              covers, and outdoor living areas. Experience our craftsmanship and
              dedication. Connect with us now for a consultation and start
              creating your dream outdoor oasis
            </p>

            <div className="find-widget py-2 font-face-rr">
              Dubai, United Arab Emirates
            </div>
            <div className="find-widget font-face-rr">
              Sharjah, United Arab Emirates
            </div>
          </div>
          <div className="col-md-6">
            <form
              className="shake"
              role="form"
              id="contactForm"
              name="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="form-group">
                <label className="control-label font-face-rr" for="name">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  name="user_name"
                />
              </div>

              <div className="form-group">
                <label className="control-label font-face-rr" for="email">
                  Your Email Goes Here
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  name="user_email"
                />
              </div>

              <div className="form-group">
                <label className="control-label font-face-rr" for="phone">
                  Phone Number
                </label>
                <input
                  className="form-control"
                  id="phone"
                  type="text"
                  name="user_phone"
                />
              </div>

              <div className="form-group">
                <label className="control-label font-face-rr" for="phone">
                  Address
                </label>
                <input
                  className="form-control"
                  id="address"
                  type="text"
                  name="address"
                />
              </div>

              <div className="form-group">
                <label for="message" className="control-label font-face-rr">
                  Type Your Message Here
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <div className="form-submit mt-5 text-center">
                <button
                  className="btn-send font-face-rb"
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
