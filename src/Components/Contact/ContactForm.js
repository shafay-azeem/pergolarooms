import React from "react";
import "../Contact/ContactForm.css";

const ContactForm = () => {
  return (
    <section class="Material-contact-section section-padding section-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h5 class="section-title">Contact Us</h5>
            <h3>REACH US OUT</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mt-3 contact-widget-section2">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div class="find-widget">
              Dubai: <a>United Arab Emirates</a>
            </div>
            <div class="find-widget">
              Sharjah: <a>United Arab Emirates</a>
            </div>
          </div>
          <div class="col-md-6">
            <form
              class="shake"
              role="form"
              method="post"
              id="contactForm"
              name="contact-form"
              data-toggle="validator"
            >
              <div class="form-group label-floating">
                <label class="control-label" for="email">
                  Your Email Goes Here
                </label>
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  name="email"
                />
              </div>

              <div class="form-group label-floating">
                <label for="message" class="control-label">
                  Type Your Message Here
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <div class="form-submit mt-5">
                <button class="btn btn-common">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
