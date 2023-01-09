import React from "react";
import "./style.css";

function index() {
  return (
    <div className="About_us" id="about_us">
      <div className="about">
        <h2 className="about_heading">WHY CHOOSE KRUZE?</h2>
        <p>
        we are committed to helping students navigate the complex process of selecting and 
        applying to universities abroad. We offer a range of services, including academic advising,
        course selection, test prep, and application assistance, to help students build the skills 
        and confidence they need to succeed.
        </p>
        <a href="/about" className="readmore">
          More About us{" "}
          {/* <span>
            <RxDoubleArrowRight />
          </span> */}
        </a>
      </div>
    </div>
  );
}

export default index;
