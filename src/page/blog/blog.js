import React from "react";
import "./style.css";

function blog() {
  return (
    <section class="blog blog_bg">
      <div class="blogpage_container">
        <header class="blog_header">
          <h3>Our Blogs</h3>
        </header>
        <div className="blogpage_dashboard_cards">
          <div className="blogpage_dashboard_cards_single">
            <div>
              <span>
                <a href="/firstblog">
                  <img src="./blog/blogfirst.png" alt="service_img" />
                </a>
              </span>
              <span className="blog_date">5 Dec 2022</span>
            </div>
            <div>
              <a href="/firstblog">
                <h1>
                  How to process a Russian Visa to Study and Work from Nepal?
                </h1>
              </a>
              <span className="blog_paragraph">
                Being the largest country by area, Russia is quite developed as
                well.
              </span>
              <span className="blog_link">
                <a href="/firstblog">Read more...</a>
              </span>
            </div>
          </div>
          <div className="blogpage_dashboard_cards_single">
            <div>
              <span>
                <a href="/secondblog">
                  <img src="./blog/blogfirst.png" alt="service_img" />
                </a>
              </span>
              <span className="blog_date">5 Dec 2022</span>
            </div>
            <div>
              <a href="/secondblog">
                <h1>Top 10 Universities in Russia</h1>
              </a>
              <span className="blog_paragraph">
                Higher education in Russia is among the best in the world!
                People all over the world recognize
              </span>
              <span className="blog_link">
                <a href="/secondblog">Read more...</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default blog;
