import React from "react";
import "./style.css";
import { BsPhone } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";

function index() {
  return (
    <div className="contactus_page">
      <div className="contactpage_details">
        <div className="contactpage_details_first">
          <div className="contactpage_details_first_detail">
            <span className="contact_icon">
              <BsPhone />
            </span>
            <h2>Contact Us</h2>
            <span className="contact_page_link">
              <a href="">9804001669</a>
            </span>
            <span className="contact_page_link">
              <a href="">info@shreeshaedu.com</a>
            </span>
          </div>
          <div className="contactpage_details_first_social">
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
              <a href="https://wa.me/9779851312171">
                <FaWhatsapp />
              </a>
            </span>
          </div>
        </div>
        <div className="contactpage_details_second">
          <span className="contact_icon">
            <GoLocation />
          </span>
          <h2>Come to Visit</h2>
          <span className="contact_page_link">
            <a href="https://goo.gl/maps/6FPa6j4avNAbQeN16">
              Machhapokhari, Balaju
              <br /> Kathmandu
            </a>
          </span>
        </div>
      </div>
      <div className="contactpage_fillform">
        <div>
          <span>Full Name:</span>
          <input
            className="contactpage_talkform_input"
            type="text"
            name="YourName"
            placeholder="Your full name"
          />
        </div>
        <div>
          <span>Email:</span>
          <input
            className="contactpage_talkform_input"
            type="email"
            name="Email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <span>Phone Number:</span>
          <input
            className="contactpage_talkform_input"
            type="number"
            name="PhoneNumber"
            placeholder="Your Phone number"
          />
        </div>

        <div>
          <span>I want to talk:</span>
          <select
            className="contactpage_talkform_input"
            name="service_want"
            id="service_want"
          >
            <option value="Product">About Course</option>
            <option value="saab">About Fees</option>
            <option value="opel">About Visa</option>
            <option value="audi">More information</option>
          </select>
        </div>
        <div>
          <span>Message:</span>
          <textarea
            id="freeform"
            className="contactpage_talkform_input"
            name="freeform"
            rows="4"
            cols="50"
          >
            Write your message...
          </textarea>
        </div>
        <div>
          <button className="contactpage_form_submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default index;
