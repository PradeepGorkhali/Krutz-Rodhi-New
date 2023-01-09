import React from "react";
import "./style.css";

function index() {
  return (
    <section class="services section-bg" id="home_services">
      <div class="container">
        <header class="homeservice_section_header">
          <h3>Our Services</h3>
        </header>
        <div className="dashboard_cards">
          <div className="dashboard_cards_single">
            <div>
              <span>
                <img src="./service/teamwork.png" alt="service_img" />
              </span>
            </div>
            <div>
              <h1>Academic Advising</h1>
            </div>
          </div>
          <div className="dashboard_cards_single">
            <div>
              <span>
                <img src="./service/consulting.png" alt="service_img" />
              </span>
            </div>
            <div>
              <h1>Course Selection</h1>
            </div>
          </div>
          <div className="dashboard_cards_single">
            <div>
              <span>
                <img src="./service/worldwide.png" alt="service_img" />
              </span>
            </div>
            <div>
              <h1>Test Prep</h1>
            </div>
          </div>
          <div className="dashboard_cards_single">
            <div>
              <span>
                <img src="./service/scholarship.png" alt="service_img" />
              </span>
            </div>
            <div>
              <h1>Application Assistance</h1>
            </div>
          </div>
          <div className="dashboard_cards_single">
            <div>
              <span>
                <img src="./service/license.png" alt="service_img" />
              </span>
            </div>
            <div>
              <h1>Career Counselling</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
