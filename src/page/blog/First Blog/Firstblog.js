import React from "react";
import "./style.css";

function Firstblog() {
  return (
    <div className="firstblog_container">
      <div className="firstblog_img">
        <img src="./blog/blogbanner1.png" alt="logo" />
      </div>
      <div className="firstblog_date">January 12, 2023</div>
      <div className="firstblog_division">
        <div className="firstblog_sidebar">
          <ul>
            <li>
              <a href="#tuition">
              Affordable tuition
              </a>
            </li>
            <li>
              <a href="#education">
              High-quality education
              </a>
            </li>
            <li>
              <a href="#diverse">
              A diverse range of programs
              </a>
            </li>
            <li>
              <a href="#cultural">
              Cultural immersion
              </a>
            </li>
            <li>
              <a href="#professional">
              Professional opportunities
              </a>
            </li>
          </ul>
        </div>
        <div className="firstblog_content">
          <h1>5 reasons to study abroad in Russia</h1>

          <p className="firstblog_quote">
          Russia is a fascinating country with a rich and complex history that has shaped its culture
           and society. From the iconic landmarks of Moscow and St. Petersburg to the diverse landscapes
            and cultures of the regions, Russia offers a unique blend of historical and cultural 
            experiences. Studying abroad in Russia allows students to fully immerse themselves 
            in this diverse and dynamic culture, exploring its rich heritage and contemporary life.
             Here are a few reasons why you might want to consider studying abroad in Russia:

          </p>

          <div id="tuition" className="firstblog_heading_contains">
            <h3>Affordable tuition</h3>
            <p>
            Higher education in Russia is generally much more affordable than in many other countries, 
            especially for international students. This can make it a cost-effective option for earning
             a degree.
            </p>
          </div>
          <div id="education" className="firstblog_heading_contains">
            <h3>High-quality education</h3>
            <p>
            Russia has a long tradition of excellence in education, and its universities are known 
            for producing well-trained and highly skilled graduates. Many Russian universities have
             strong research programs and are highly ranked globally.

            </p>
            
          </div>
          <div id="diverse" className="firstblog_heading_contains">
            <h3>A diverse range of programs</h3>
            <p>Russian universities offer a wide variety of programs at the undergraduate, graduate, 
              and postgraduate levels, including in fields such as engineering, natural sciences, 
              humanities, and social sciences. There are also many programs taught in English, which
               can be helpful for international students.
</p>

            
          </div>
          <div id="cultural" className="firstblog_heading_contains">
            <h3>Cultural immersion</h3>
            <p>Studying abroad in Russia allows students to fully immerse themselves in the country's 
              diverse and dynamic culture, exploring its rich heritage and contemporary life.
               This can be a rewarding and enriching experience that helps students learn more 
               about the world and develop intercultural skills.</p>
            
          </div>
          <div id="professional" className="firstblog_heading_contains">
            <h3>Professional opportunities</h3>
            <p>Completing a degree in Russia can open up career opportunities both in Russia and
               internationally. Many Russian universities have strong connections with businesses 
               and organizations, which can help students find internships and jobs after graduation.</p>
          </div>
          <p>In addition to its cultural and historical attractions, Russia is also a modern and 
            innovative country, with a thriving economy and a strong focus on science and technology.
             This makes it an exciting place to study and learn, with a wide range of academic and 
             professional opportunities available to students. Don't miss out on the opportunity to 
             study abroad in Russia - start exploring your options today!
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Firstblog;
