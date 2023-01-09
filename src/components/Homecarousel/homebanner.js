import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";

export default class Homecarousel extends Component {
  render() {
    return (
      <div className="homecarousel_carousel" id="home_banner">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img
              className="home_image_carousel"
              src="./banner/banner1.png"
              alt="logo"
            />
          </div>
          <div>
            <img
              className="home_image_carousel"
              src="./banner/banner2.png"
              alt="logo"
            />
          </div>

          {/* <div>
            <img
              className="home_image_carousel"
              src="./banner/nationalbanner5.png"
              alt="logo"
            />
          </div> */}
        </Carousel>
      </div>
    );
  }
}
