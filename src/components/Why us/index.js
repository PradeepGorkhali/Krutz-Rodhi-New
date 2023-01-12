import React from "react";
import "./style.css";

function index() {
  return (
    <section class="why_us whyus_section_bg" id="whyUs">
      <div class="whyus_container">
        <header class="whyus_section_header">
          <h3>Why Us?</h3>
        </header>
        <div className="whyus_dashboard_cards">
          <div className="whyus_dashboard_cards_single">
            <div>
              <span>
                <img src="./whyus/experience.png" alt="service_img" />
              </span>
            </div>
            <div className="whyus_cards_header">
              <h1>Experience</h1>
            </div>
          </div>
          <div className="whyus_dashboard_cards_single">
            <div>
              <span>
                <img src="./whyus/expertise.png" alt="service_img" />
              </span>
            </div>
            <div className="whyus_cards_header">
              <h1>Expertise</h1>
            </div>
          </div>
          <div className="whyus_dashboard_cards_single">
            <div>
              <span>
                <img src="./whyus/personalize.png" alt="service_img" />
              </span>
            </div>
            <div className="whyus_cards_header">
              <h1>Personalized support</h1>
            </div>
          </div>
          <div className="whyus_dashboard_cards_single">
            <div>
              <span>
                <img src="./whyus/proven.png" alt="service_img" />
              </span>
            </div>
            <div className="whyus_cards_header">
              <h1>Proven results</h1>
            </div>
          </div>
          <div className="whyus_dashboard_cards_single">
            <div>
              <span>
                <img src="./whyus/convinence.png" alt="service_img" />
              </span>
            </div>
            <div className="whyus_cards_header">
              <h1>Convenience</h1>
            </div>
          </div>
          <div className="whyus_dashboard_cards_single">
            <div>
              <span>
                <img src="./whyus/Comprehensive.png" alt="service_img" />
              </span>
            </div>
            <div className="whyus_cards_header">
              <h1>Comprehensive services</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
