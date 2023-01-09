import React from "react";
import "./style.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function index() {
  return (
    <div className="footer_container">
      <div className="footer_heading">
        <h1>SHREESHA EDUCATION CONSULTANCY</h1>
        <span>
          Shreesha Education Consultancy is a licensed educational consultant
          registered with the Nepal Ministry of Company Registrar, specializing
          in Russian education and immigration services. Our specialized team
          has been advising students on their higher education in Russia for
          over a decade. We are in Kathmandu's Balaju Macchapokari.
        </span>
      </div>
      <div className="footer_social">
        <span>
          <a href="https://www.facebook.com/Shreeshaedu">
            <FaFacebook />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/shreeshaedu/">
            <FaInstagram />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/company/shreesha-education-consultancy-study-in-russia/">
            <FaLinkedin />
          </a>
        </span>
        <span>
          <a href="info@shreeshaedu.com">
            <MdOutlineEmail />
          </a>
        </span>
        <span>
          <a href="https://goo.gl/maps/6FPa6j4avNAbQeN16">
            <FaMapMarkerAlt />
          </a>
        </span>
      </div>
      <div className="footer_home_links">
        <div>
          <a href="/">
            <span>HOME</span>
          </a>
          <a href="#about_us">
            <span>ABOUT US</span>
          </a>
          <a href="#home_services">
            <span>OUR SERVICES</span>
          </a>
          <a href="#course">
            <span>OUR COURSES</span>
          </a>
          <a href="#blogs">
            <span>BLOG</span>
          </a>
          <a href="#contact_home">
            <span>CONTACT</span>
          </a>
        </div>
      </div>
      <div className="footer_digital">
        <span>
          CREATED WITH PASSION BY{" "}
          <a href="http://rodhi.digital/">DIGITAL RODHI</a> | COPYRIGHT &copy;
          SSEC
        </span>
      </div>
    </div>
  );
}

export default index;
