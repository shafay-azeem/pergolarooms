import React from "react";
import "../AboutUs/AboutUs.css";
import PergolasDesignsImg from "../../assets/AboutUsImages/peRGOLA-aBOUT.jpg";
import ContactForm from "../Contact/ContactForm";
import { useEffect } from "react";
import { useState } from "react";

const AboutUs = () => {
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
  const data = [
    {
      heading: "OUR PRINCIPLES",
      subHeading: "OUR PRINCIPLES: Delivering Excellence in Custom Pergolas and Outdoor Living Solutions",
      description:
        "Quality Craftsmanship We combine skilled craftsmanship with premium materials to create pergolas that are built to last. Personalization: We offer a wide range of customization options to ensure your pergola reflects your unique style and complements your home.",
      subDescription:
        "Customer Satisfaction We prioritize your satisfaction and provide excellent customer service from start to finish. Innovation and Design: We stay ahead of the curve with innovative designs and the latest trends in outdoor living. Experience the PERGOLAROOMS difference. Transform your outdoor space today!",
      image: require("../../assets/AboutUsImages/4A.jpg"),
    },
    {
      heading: "WORK ETHICS",
      subHeading: "WORK ETHICS: Exceeding Expectations with Integrity and Dedication",
      description:
        "Quality Craftsmanship We take pride in delivering exceptional quality in every pergola we create, ensuring attention to detail and meticulous craftsmanship. Timely Delivery We value your time and strive to complete projects within the agreed-upon timeline, without compromising on quality.",
      subDescription:
        "Transparent Communication We believe in open and honest communication, providing regular updates and addressing your queries promptly.Professionalism Our team conducts themselves with professionalism, demonstrating respect, reliability, and accountability in all interactions. Experience the PERGOLAROOMS work ethics. Trust us to exceed your expectations with integrity and dedication.",
      image: require("../../assets/AboutUsImages/3A.jpg"),
    },
    {
      heading: "WHAT WE DO",
      subHeading: "Creating Stunning Custom Pergolas and Outdoor Living Spaces",
      description:
        "Custom Pergolas We bring your vision to life with custom-designed pergolas, crafted with precision and attention to detail. Outdoor Living Spaces We create enchanting outdoor living areas, including seating areas, dining spaces, and entertainment zones.",
      subDescription:
        "Patio Covers We provide stylish and functional patio covers that shield you from the elements while enhancing the beauty of your outdoor space. Outdoor Kitchen Areas: We design and construct outdoor kitchen areas where you can indulge in culinary delights while enjoying the fresh air. Experience the expertise of PERGOLAROOMS. Let us transform your outdoor space into a captivating oasis of comfort and beauty.",
      image: require("../../assets/AboutUsImages/2A.jpg"),
    },
    {
      heading: "OUR LEGACY",
      subHeading: "A Decade of Excellence in Custom Pergolas and Outdoor Living",
      description:
        "For over a decade, PERGOLAROOMS has been at the forefront of delivering exceptional custom pergolas and outdoor living solutions. Our legacy is built on a foundation of expertise, innovation, and customer satisfaction. With a passion for craftsmanship and a commitment to quality, we have earned a reputation for excellence in the industry.",
      subDescription:
        "Our team of experienced professionals continuously strives to exceed expectations, creating captivating outdoor spaces that stand the test of time. We take pride in our legacy of transforming ordinary outdoor areas into extraordinary havens of beauty and relaxation. Experience the PERGOLAROOMS legacy and let us make your outdoor dreams a reality.",
      image: require("../../assets/AboutUsImages/1A.jpg"),
    },
  ];

  return (
    <>
      <div className="aboutUs">
        <h2 className="text-white text-center py-5 font-face-re">ABOUT US</h2>
      </div>

      <div className="about-pergolas-designs container-fluid px-lg-5 py-5">
        <div className="row px-lg-5">
          <div className="col-lg-6">
            <h2 className="font-face-rr pt-lg-5">PERGOLAS DESIGNS</h2>
            <hr></hr>
            <p className="font-face-rr" style={{ fontSize: "14px" }}>
              Pergolas enhance the look of your outdoor space while protecting
              the quality of many items in your garden or patio; for example,
              they shield your outdoor furniture from the sun, dust, and rain. A
              freestanding pergola has many of the same benefits as a patio. Our
              bioclimatic pergolas, retractable roofs, and fixed pergola systems
              are appropriate for both residential and commercial use and
              provide excellent weather protection.
            </p>
            <p className="font-face-rr" style={{ fontSize: "14px" }}>
              Pergolas enhance the look of your outdoor space while protecting
              the quality of many items in your garden or patio; for example,
              they shield your outdoor furniture from the sun, dust, and rain. A
              freestanding pergola has many of the same benefits as a patio. Our
              bioclimatic pergolas, retractable roofs, and fixed pergola systems
              are appropriate for both residential and commercial use and
              provide excellent weather protection.
            </p>
            <p className="font-face-rr" style={{ fontSize: "14px" }}>
              BBQ AREA | GLASS ROOM | PERGOLAS | VILLA EXTENSION /PATIO
            </p>
          </div>

          <div className="col-lg-6">
            <img className="img-fluid" src={PergolasDesignsImg} alt="" />
          </div>
        </div>
      </div>

      <div className="container text-center">
        <h4 className="font-face-rb">WHAT WE DO</h4>
        <hr class="hr-style"></hr>
        <p className="font-face-rr py-2" style={{ fontSize: "14px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="about-pergolas-designs py-5">
        {data.map((item, i) => (
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div
                className={`col-lg-6${i % 2 === 0 ? "" : " order-lg-2"
                  } bg-cover`}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>

              <div className={`col-lg-6${i % 2 === 0 ? "" : " order-lg-1"} `}>
                <div className="inner p-md-3 p-2">
                  <h5 className="font-face-rb">{item.heading}</h5>
                  <h3 style={{ fontWeight: "400" }} class="font-face-rr pb-3">
                    {item.subHeading}
                  </h3>
                  <p
                    class="description-ethicalessence text-muted font-face-rr"
                    style={{ fontSize: "14px" }}
                  >
                    {item.description}
                  </p>
                  <p
                    class="description-ethicalessence text-muted font-face-rr"
                    style={{ fontSize: "14px" }}
                  >
                    {item.subDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="contact-us">
        <ContactForm />
      </div>
    </>
  );
};

export default AboutUs;
