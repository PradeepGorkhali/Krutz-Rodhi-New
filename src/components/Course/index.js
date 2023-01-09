import React from "react";
import "./style.css";
function index() {
  return (
    <section class="courses section-brr" id="course">
      <div class="course_container">
        <header class="course_section_header">
          <h3>Study Abroad</h3>
        </header>
        <div className="course_dashboard_cards">
          <div className="course_dashboard_cards_single">
            <div>
              <span>
                <img src="https://i0.wp.com/www.driftwoodjournals.com/wp-content/uploads/2020/11/2859px-Spasskaya_Tower_and_the_St._Basils_Cathedral-scaled.jpg?fit=2560%2C1934&ssl=1" alt="course_img" />
              </span>
            </div>
            <div>
              <h1>Russia</h1>
            </div>
          </div>
          <div className="course_dashboard_cards_single">
            <div>
              <span>
                <img src="https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-30-at-16.02.11.png" alt="course_img" />
              </span>
            </div>
            <div>
              <h1>UK</h1>
            </div>
          </div>
          <div className="course_dashboard_cards_single">
            <div>
              <span>
                <img src="https://wallpaperaccess.com/full/440555.jpg" alt="course_img" />
              </span>
            </div>
            <div>
              <h1>Canada</h1>
            </div>
          </div>
          <div className="course_dashboard_cards_single">
            <div>
              <span>
                <img src="https://www.uts.edu.au/sites/default/files/2022-01/Sydney%20Harbour.png" alt="course_img" />
              </span>
            </div>
            <div>
              <h1>Australia</h1>
            </div>
          </div>
          {/* <div className="course_dashboard_cards_single">
            <div>
              <span>
                <img src="./course/engine.png" alt="course_img" />
              </span>
            </div>
            <div>
              <h1>Electric Power Engeneering</h1>
            </div>
          </div>
          <div className="course_dashboard_cards_single">
            <div>
              <span>
                <img src="./course/dentistry.png" alt="course_img" />
              </span>
            </div>
            <div>
              <h1>Dentistry - Stomatology</h1>
            </div>
          </div>
          <div className="course_dashboard_cards_single">
            <div>
              <span>
                <img src="./course/data.png" alt="course_img" />
              </span>
            </div>
            <div>
              <h1>Data Analysis in Biology and Medicine</h1>
            </div>
          </div>
          <div className="course_dashboard_cards_single">
            <div>
              <span>
                <img src="./course/automobile.png" alt="course_img" />
              </span>
            </div>
            <div>
              <h1>Automotive Engineering</h1>
            </div>
          </div> */}
        </div>
        {/* <div className="course_bottom">
          <a href="/courses" className="readmore">
            Explore More
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default index;
