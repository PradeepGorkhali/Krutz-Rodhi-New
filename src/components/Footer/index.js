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
        <h1>KRUZE EDUCATION CONSULTANCY</h1>
        <span>
        Welcome to Kruze Educational Consultancy! We are an expert team of educational
         advisors dedicated to helping students in Nepal achieve their academic and professional
          goals through studying abroad in Russia, the United Kingdom, Australia, and Canada.
        </span>
      </div>
      <div className="footer_social">
        <span>
          <a href="http://www.facebook.com/edukruze">
            <FaFacebook />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/kruze_edu/">
            <FaInstagram />
          </a>
        </span>
        <span>
          <a href="http://www.linkedin.com/company/kruze-edu/">
            <FaLinkedin />
          </a>
        </span>
        {/* <span>
          <a href="info@shreeshaedu.com">
            <MdOutlineEmail />
          </a>
        </span>
        <span>
          <a href="https://goo.gl/maps/6FPa6j4avNAbQeN16">
            <FaMapMarkerAlt />
          </a>
        </span> */}
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
