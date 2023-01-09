import React from "react";
import "./style.css";

function index() {
  return (
    <div className="aboutus_container">
      <div className="aboutpage_img">
        <img src="./banner/banner1.png" alt="logo" />
      </div>
      <div className="aboutpage">
        <p>
        Welcome to Kruze Educational Consultancy! We are an expert team of educational advisors 
        dedicated to helping students in Nepal achieve their academic and professional goals through 
        studying abroad in Russia, the United Kingdom, Australia, and Canada.
          <br />
          At Kruze Educational Consultancy, we are committed to helping students navigate the complex 
          process of selecting and applying to universities abroad. We offer a range of services, 
          including academic advising, course selection, test prep, and application assistance, 
          to help students build the skills and confidence they need to succeed.
          <br />
          We believe that every student has the potential to succeed, and we are dedicated to supporting
           them on their educational journey. Contact us today to learn more about how we can help you 
           achieve your academic and professional goals.
        </p>
      </div>
    </div>
  );
}

export default index;
