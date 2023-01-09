import "./App.css";
import Header from "./components/Header/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Servicepage from "./page/services";
import Coursepage from "./page/courses";
import About from "./page/aboutus";
import Blog from "./page/blog/blog";
import Contact from "./page/contactus";
import Firstblog from "./page/blog/First Blog/Firstblog";
import Secondblog from "./page/blog/Second Blog/Secondblog";
import FAQ from "./page/FAQ";
import News from "./page/News";
import ReactGA from "react-ga";
import Appconfig from "./Appconfig";
import { useEffect } from "react";

ReactGA.initialize(Appconfig.GOOGLE.GA_TRACKING_CODE);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Servicepage />} />
          <Route exact path="/courses" element={<Coursepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blogs" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/firstblog" element={<Firstblog />} />
          <Route exact path="/secondblog" element={<Secondblog />} />
          <Route exact path="/faqs" element={<FAQ />} />
          <Route exact path="/news" element={<News />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
