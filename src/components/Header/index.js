import React from "react";
import "./style.css";
import {
  BsFillTelephoneOutboundFill,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoLocation } from "react-icons/go";

function index() {
  return (
    <div className="main_header_container">
      <div className="adverisement_wrapper">
        <div className="advertisement_wrapper_content">
          <a href="https://wa.me/9779841171289">
            <span className="contact_advertisement_wrapper">
              <BsWhatsapp />
            </span>
            <span>+977 9</span>
          </a>
          <a href="tel:9841171289">
            <span className="contact_advertisement_wrapper">
              <BsFillTelephoneOutboundFill />
            </span>
            <span>9841171289</span>
          </a>
        </div>
        <div className="advertisement_center_wrapper_content">
          <a href="https://goo.gl/maps/6FPa6j4avNAbQeN16">
            <span className="contact_advertisement_wrapper">
              <GoLocation />
            </span>
            <span>Labim Marga , Lalitpur</span>
          </a>
        </div>
        <div className="advertisement_second_wrapper_content">
          <a href="http://www.facebook.com/edukruze">
            <span className="contact_advertisement_wrapper">
              <BsFacebook />
            </span>
          </a>
          <a href="https://www.instagram.com/kruze_edu/">
            <span className="contact_advertisement_wrapper">
              <BsInstagram />
            </span>
          </a>
          <a href="http://www.linkedin.com/company/kruze-edu/">
            <span className="contact_advertisement_wrapper">
              <BsLinkedin />
            </span>
          </a>
        </div>
      </div>
      <nav>
        <input type="checkbox" id="nav-toggle" />
        <div class="header_inner_logo">
          <a className="header_logo_link" href="/">
            <img class="header_logo" src="./logo/logo.png" alt="Logo" />
          </a>
        </div>
        <ul class="header_links">
          <li className="header_list">
            <a className="header_list_links" href="/">
              Home
            </a>
          </li>
          <li className="header_list">
            <a className="header_list_links" href="#about_us">
              About Us
            </a>
          </li>
          <li className="header_list">
            <a className="header_list_links" href="#home_services">
              Services
              {/* <MdOutlineArrowDropDown /> */}
            </a>
            {/* <div className="dropdown_content">
              <a className="dropdown_content_link" href="/services">
                Collaboration Services to Universites
              </a>
              <a className="dropdown_content_link" href="/services">
                Educational Counselling
              </a>
              <a className="dropdown_content_link" href="/services">
                Immigration Assistance
              </a>
              <a className="dropdown_content_link" href="/services">
                Scholarship Assistance
              </a>
              <a className="dropdown_content_link" href="/services">
                Overseas Work Permit
              </a>
              <a className="dropdown_content_link" href="/services">
                See More..
              </a>
            </div> */}
          </li>
          <li className="header_list">
            <a className="header_list_links" href="#course">
              Study Abroad
              {/* <MdOutlineArrowDropDown /> */}
            </a>
            {/* <div className="dropdown_content">
              <a className="dropdown_content_link" href="/courses">
                Adaptive Data Analysis
              </a>
              <a className="dropdown_content_link" href="/courses">
                Electroenergetics and Electrical Engeneering
              </a>
              <a className="dropdown_content_link" href="/courses">
                Dental Medicine
              </a>
              <a className="dropdown_content_link" href="/courses">
                Management Marketing
              </a>
              <a className="dropdown_content_link" href="/courses">
                Electric Power Engeneering
              </a>
              <a className="dropdown_content_link" href="/courses">
                See More..
              </a>
            </div> */}
          </li>
          <li className="header_list">
            <a className="header_list_links" href="#blogs">
              Blogs
              {/* <MdOutlineArrowDropDown /> */}
            </a>
            {/* <div className="dropdown_content">
              <a className="dropdown_content_link" href="/blogs">
                Blogs
              </a>
              <a className="dropdown_content_link" href="/faqs">
                FAQ
              </a>
              <a className="dropdown_content_link" href="/news">
                News
              </a>
            </div> */}
          </li>
          <li className="header_list">
            <a className="header_list_links" href="#contact_home">
              Contact Us
            </a>
          </li>
          <li className="header_list">
            <a className="header_list_links" href="#contact_home">
              Talk to expert
            </a>
          </li>
        </ul>
        <label for="nav-toggle" class="icon-burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </nav>
      <label for="nav-toggle" class="icon-burger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
    </div>
    // <div className="nav_header_container">
    //   <header>
    //     <div class="nav-wrapper">
    //       <div class="logo-container">
    //         <a href="/">
    //           <img class="logo" src="./logo/rodhigroup.png" alt="Logo" />
    //         </a>
    //       </div>
    //       <nav>
    //         <input class="hidden" type="checkbox" id="menuToggle" />
    //         <label class="menu-btn" for="menuToggle">
    //           <div class="menu">___</div>
    //           <div class="menu">___</div>
    //           <div class="menu">___</div>
    //         </label>
    //         <div class="nav-container">
    //           <ul class="nav-tabs">
    //             <li class="nav-tab">
    //               <a className="nav_tab_links" href="/">
    //                 Home
    //               </a>
    //             </li>
    //             <li class="nav-tab">
    //               <a className="nav_tab_links" href="#servicess">
    //                 Expertise
    //               </a>
    //             </li>
    //             <li class="nav-tab">
    //               <a className="nav_tab_links" href="#our_clients">
    //                 Clients
    //               </a>
    //             </li>
    //             <li class="nav-tab">
    //               <a className="nav_tab_links" href="#about_us">
    //                 About Us
    //               </a>
    //             </li>
    //             <li class="nav-tab">
    //               <a className="nav_tab_links" href="#lets_talk">
    //                 Let's Talk
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </nav>
    //     </div>
    //   </header>
    // </div>
  );
}

export default index;
