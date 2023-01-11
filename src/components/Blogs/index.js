import React from "react";
import "./style.css";
function index() {
  return (
    <div className="home_product" id="blogs">
      <div className="homeproduct_container">
        <h3 className="homeproduct_heading">Our Blogs</h3>
        {/* <p className="homeproduct_paragraph">
          From Electronic Gadget, Kitchen Applience, Baby products to pet
          supplies we can source and import. Here’s some example of products we
          have worked with.
        </p> */}
        <div className="homeproduct_scroller">
          <div className="homeproduct_mediaelement">
            <a className="homeproduct_mediaelement_link" href="/firstblog">
              <img src="./blog/blogpost1.png" alt="electronics" />
            </a>
            <span className="home_blog_date">9 Jan 2023</span>
            <a className="home_blog_links" href="">
              <h2 className="item">
              5 reasons to study abroad in Russia
              </h2>
            </a>
            <span className="home_blog_paragraph">
            Russia is a fascinating country with a rich and complex history that has shaped its culture and society
            </span>
            <span className="home_blog_link">
              <a className="home_blog_links" href="">
                Read more...
              </a>
            </span>
          </div>
          <div className="homeproduct_mediaelement">
            <a className="homeproduct_mediaelement_link" href="">
              <img src="./blog/blogpost2.png" alt="kitchen" />
            </a>
            <span className="home_blog_date">9 Jan 2023</span>
            <a className="home_blog_links" href="">
              <h2 className="item">10 tips for choosing the right study abroad program</h2>
            </a>
            <span className="home_blog_paragraph">
            Are you thinking about studying abroad but not sure where to start? Here are 10 tips to help you choose the best study abroad program for you:

            </span>
            <span className="home_blog_link">
              <a className="home_blog_links" href="">
                Read more...
              </a>
            </span>
          </div>
          {/* <div className="homeproduct_mediaelement">
            <a className="homeproduct_mediaelement_link" href="/firstblog">
              <img src="./blog/blogpost1.png" alt="smart" />
            </a>
            <span className="home_blog_date">5 Dec 2022</span>
            <a className="home_blog_links" href="/firstblog">
              <h2 className="item">
                How to process a Russian Visa to Study and Work from Nepal?
              </h2>
            </a>
            <span className="home_blog_paragraph">
              Being the largest country by area, Russia is quite developed as
              well.
            </span>
            <span className="home_blog_link">
              <a className="home_blog_links" href="/firstblog">
                Read more...
              </a>
            </span>
          </div>
          <div className="homeproduct_mediaelement">
            <a className="homeproduct_mediaelement_link" href="/firstblog">
              <img src="./blog/blogfirst.png" alt="decor" />
            </a>
            <span className="home_blog_date">5 Dec 2022</span>
            <a className="home_blog_links" href="/firstblog">
              <h2 className="item">
                How to process a Russian Visa to Study and Work from Nepal?
              </h2>
            </a>
            <span className="home_blog_paragraph">
              Being the largest country by area, Russia is quite developed as
              well.
            </span>
            <span className="home_blog_link">
              <a className="home_blog_links" href="/firstblog">
                Read more...
              </a>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default index;
