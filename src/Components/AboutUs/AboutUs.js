import React from "react";
import "../AboutUs/AboutUs.css";
import ContactForm from "../Contact/ContactForm";
import { useEffect } from "react";
import { useState } from "react";
import img1 from "../../assets/AboutUsImages/1w.webp";
import img2 from "../../assets/AboutUsImages/4w.webp";
import img3 from "../../assets/AboutUsImages/2w.webp";
import img4 from "../../assets/AboutUsImages/3w.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import whatsappimg from "../../assets/whatsapp.png";
import phoneImg from "../../assets/reciever.png";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    function handleResize() {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButton = () => {
    var url = "https://wa.me/+971585799666";
    window.open(url);
  };
  const handlePhoneButton = () => {
    window.location.href = "tel:+971585799666";
  };
  return (
    <>
      <div className="aboutUs">
        <div
          className="container-fluid"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className="text-white text-center py-5 font-face-re">ABOUT US</h2>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "70px",
          right: "20px",
          zIndex: "9999",
          height: "50px",
          width: "50px",
        }}
      >
        <img
          src={phoneImg}
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          onClick={handlePhoneButton}
        />
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "20px",
          zIndex: "9999",
          height: "50px",
          width: "50px",
        }}
      >
        <img
          src={whatsappimg}
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          onClick={handleButton}
        />
      </div>

      <div className="First container-fluid text-black">
        <div className="container py-5">
          <h1 className="font-face-re">
            PERGOLA ROOMS BUILDING CONTRACTING LLC
          </h1>
          <p className="font-face-rr">
            Established over a decade ago, Pergola Rooms Building Contracting
            LLC has garnered a strong reputation as a premier provider of
            exceptional outdoor living solutions. Specializing in Pergolas,
            Glass Rooms, Bar & BBQ Counters, and Aluminium Doors and Fences, we
            offer a comprehensive range of services to transform your outdoor
            space into a haven of comfort and style.
          </p>
          <p className="font-face-rr">
            Our team of seasoned professionals combines technical expertise with
            a deep understanding of design aesthetics, ensuring that every
            project we undertake is executed with precision and attention to
            detail. From concept to completion, we work closely with our
            clients, taking their vision and transforming it into reality.
          </p>
          <p className="font-face-rr">
            At Pergola Rooms Building Contracting LLC, we pride ourselves on
            delivering innovative designs, superior craftsmanship, and
            unparalleled customer service. Whether you desire a cozy stunning
            Glass Room, or a functional BBQ area, we are committed to exceeding
            your expectations and creating outdoor spaces that enhance your
            lifestyle.
          </p>
          <p className="font-face-rr">
            Pergolas | Glass Rooms | Villa extention/ patio | BBQ area
          </p>
        </div>
      </div>
      {/* <div className="py-2 text-center container">
        <h1>What We Do</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div> */}

      <div className="container py-5">
        <div
          className="row"
          style={{
            position: "relative",
            alignItems: "end",
            marginBottom: "80px",
          }}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div
            style={{
              backgroundImage: `url('${img4}')`,
              minHeight: "600px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="col-lg-6 shadow"
          ></div>
          <div className="col-lg-6">
            <div className="spacer text-black">
              <div className="inner p-lg-5">
                <h3 className="py-2 font-face-re">OUR PRINCIPLES</h3>
                <p className="font-face-rr">
                  We embrace customization, tailoring designs to reflect your
                  unique style and complement your home perfectly. Above all,
                  customer satisfaction is our priority, providing personalized
                  service and exceeding expectations. With these principles, we
                  have established ourselves as a trusted name in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row ethics-second"
          style={{
            position: "relative",
            alignItems: "end",
            marginBottom: "80px",
          }}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="col-lg-6 spacerCol">
            <div className="spacer-right text-black">
              <div className="inner-right p-lg-5">
                <h3 className="py-2 font-face-re">WORK ETHICS</h3>
                <p className="font-face-rr">
                  We believe in transparent communication, timely delivery, and
                  exceptional craftsmanship. By embodying these work ethics, we
                  have earned the trust and loyalty of our valued clients.
                  Experience the Pergolarooms difference today and witness our
                  unwavering commitment to excellence in all that we do.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url('${img3}')`,
              minHeight: "600px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="col-lg-6 shadow"
          ></div>
        </div>

        <div
          className="row"
          style={{
            position: "relative",
            alignItems: "end",
            marginBottom: "80px",
          }}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div
            style={{
              backgroundImage: `url('${img2}')`,
              minHeight: "600px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="col-lg-6 shadow"
          ></div>
          <div className="col-lg-6">
            <div className="spacer text-black">
              <div className="inner p-lg-5">
                <h3 className="py-2 font-face-re">WHAT WE DO</h3>

                <p className="font-face-rr">
                  We offer premium-quality aluminium works including Pergolas,
                  glass rooms, Bar & BBQ Counters, and doors and fences. With
                  our technical expertise and attention to detail, we bring your
                  outdoor visions to life, creating exceptional spaces that
                  stand the test of time. Trust Pergolarooms for all your
                  outdoor living needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row ethics-fourth"
          style={{
            position: "relative",
            alignItems: "end",
            marginBottom: "80px",
          }}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="col-lg-6 spacerCol">
            <div className="spacer-right text-black">
              <div className="inner-right p-lg-5">
                <h3 className="py-2 font-face-re">UNRIVALLED EXPERIENCE</h3>

                <p className="font-face-rr">
                  Our functional BBQ areas, stylish Bar & BBQ Counters, and
                  durable aluminium pergolas are specifically engineered to
                  endure Dubai's weather conditions. Trust our legacy of
                  innovative craftsmanship to elevate your outdoor living
                  experience in Dubai. Experience the difference at Pergolarooms
                  today.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url('${img1}')`,
              minHeight: "600px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="col-lg-6 shadow"
          ></div>
        </div>
      </div>
      <div id="contact-us">
        <ContactForm />
      </div>
    </>
  );
};

export default AboutUs;
