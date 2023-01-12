import React from "react";
import "./style.css";

function Secondblog() {
  return (
    <div className="secondblog_container">
      <div className="secondblog_img">
        <img src="./blog/blogbanner2.png" alt="logo" />
      </div>
      <div className="secondblog_date">January 12, 2023</div>
      <div className="secondblog_division">
        <div className="secondblog_sidebar">
          <ul>
            <li>
              <a href="#define">
                Define your goals
              </a>
            </li>
            <li>
              <a href="#research">
              Research your options
              </a>
            </li>
            <li>
              <a href="#feedback">
              Get feedback from current and former students
              </a>
            </li>
            <li>
              <a href="#budget">
                Consider your budget
              </a>
            </li>
            <li>
              <a href="#evaluate">
                Evaluate the academic offerings
              </a>
            </li>
            <li>
              <a href="#think">
              Think about language skills
              </a>
            </li>
            <li>
              <a href="#location">
                Consider the location
              </a>
            </li>
            <li>
              <a href="#support">
                Look for programs with strong support systems
              </a>
            </li>

          </ul>
        </div>
        <div className="secondblog_content">
          <h1>10 tips for choosing the right study abroad program</h1>

          <p className="secondblog_quote">
          Are you thinking about studying abroad but not sure where to start? Here are 10 tips to help
           you choose the best study abroad program for you:
          </p>

          <div id="define" className="secondblog_heading_contains">
            <h3>Define your goals</h3>
            <p>
            Clearly identify what you hope to achieve by studying abroad. Do you want to
             improve your language skills, explore a new culture, or gain professional 
             experience? This will help you narrow down your options and choose a program 
             that aligns with your interests and objectives.

            </p>
          </div>
          <div id="research" className="secondblog_heading_contains">
            <h3>Research your options</h3>
            <p>
            There are many different studies abroad programs available, so it's important to do your research and
             compare different programs to find the one that best fits your needs. Consider factors
              such as location, academic focus, cost, length of the program, and cultural immersion.
            </p>
          </div>
          <div id="feedback" className="secondblog_heading_contains">
            <h3>Get feedback from current and former students</h3>
            <p>
            Talk to students who have studied abroad in the past to get their perspectives on the 
            program you're considering. They can offer valuable insights and advice on what to expect
             and how to make the most of your study abroad experience.

            </p>
          </div>
          <div id="budget" className="secondblog_heading_contains">
            <h3>Consider your budget </h3>
            <p>
            Study abroad programs can vary significantly in cost, so it's important to consider 
            your budget and financial resources when choosing a program. Don't forget to factor 
            in living expenses, travel costs, and any other fees that may be associated with the
             program.
            </p>
          </div>
          <div id="evaluate" className="secondblog_heading_contains">
            <h3>Evaluate the academic offerings</h3>
            <p>
            Look at the courses and academic programs offered by the study abroad program and 
            ensure that they align with your academic goals and interests. Consider whether
             the program offers credit that will transfer back to your home university and if
              it meets any degree requirements you may have.

            </p>
          </div>
          <div id="think" className="secondblog_heading_contains">
            <h3>Think about language skills</h3>
            <p>
            If you want to improve your language skills, consider studying abroad in a 
            country where the language is spoken. Keep in mind that language immersion 
            programs can be more intensive and may require a higher level of language proficiency.

            </p>
          </div>
          <div id="location" className="secondblog_heading_contains">
            <h3>Consider the location</h3>
            <p>
            Think about what you want to experience while studying abroad and choose a location 
            that aligns with your interests. Do you want to study in a big city or a smaller town?
             Do you want to be close to the beach or the mountains?
            </p>
          </div>
          <div id="support" className="secondblog_heading_contains">
            <h3>Look for programs with strong support systems</h3>
            <p>
            Make sure the study abroad program you choose has a strong support system in place to 
            help you navigate any challenges that may come up while you're abroad. 
            This could include things like on-site staff, academic advisors, or a robust
             network of alumni.
            </p>
          </div>
          
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Secondblog;
