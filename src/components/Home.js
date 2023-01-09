import React from "react";
import "./style.css";
import About from "./About Us/index";
import Service from "./Services";
import Courses from "./Course";
import Subscribe from "./Subscribe/Subscribe";
import Contact from "./Contact";
import Whyus from "./Why us";
import Blogs from "./Blogs";
import Homecarousel from "./Homecarousel/homebanner";

function Home() {
  return (
    <div className="shreesha_home">
      {/* <Carousel /> */}
      <Homecarousel />
      <About />
      <Whyus />
      <Service />
      <Courses />
      <Blogs />
      <Contact />
      <Subscribe />'
    </div>
  );
}

export default Home;
