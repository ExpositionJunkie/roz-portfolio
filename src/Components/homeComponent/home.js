import React from "react";
import "../../Styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="homeDark">
      <div className="darkMarginWrap">
        <div className="titleWrap">
          <div className="hello">Hi, I'm Roz</div>
          <div className="tagline">[fullstack MERN developer]</div>
        </div>

        <div className="keyboardDark">
          <img
            src="/keyboardBlack.jpg"
            alt="Black keyboard with brightly colored LEDs shining behind the keys."
          />
        </div>

        <hr></hr>
        <div className="makeAndSolve">
          <div className="make">I make things</div>
          <div className="and">&</div>
          <div className="solve">solve problems</div>
        </div>
        <hr></hr>

        <img
          src="/fiberOpticDark.jpg"
          alt="Fiber Optic wire backlit by purple blue and green LEDs."
        />

        <hr></hr>
        <h1 className="level">Ready to level up your website?</h1>
        <hr></hr>

        <div className="stackWrap">
          <div className="stack">
            <div>S</div>
            <div>T</div>
            <div>A</div>
            <div>C</div>
            <div>K</div>
          </div>
          <div className="stackList">
            <li>React</li>
            <li>React Native</li>
            <li>Mongo & Mongoose</li>
            <li>Express</li>
            <li>Node JS</li>
            <li>Responsive Design</li>
            <li>Rest API</li>
            <li>SCSS/SASS</li>
            <li>Bootstrap</li>
            <li>Figma</li>
            <li>Requirement Gathering</li>
            <li>VBA</li>
          </div>
        </div>

        <hr></hr>

        <img
          src="/lightBulbDark.jpg"
          alt="A light bulb backlit by orange and pink fire."
        />

        <hr></hr>

        <div className="contact">
          <h2 className="contactHead">contact</h2>
          <span>
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              data-fa-transform="grow-6"
              className="icon"
            />
            <h5 className="contactLink">github.com/expositionjunkie</h5>
          </span>
          <span>
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              size="3x"
              data-fa-transform="grow-6"
              className="icon"
            />
            <h5 className="contactLink">rosalindavalbrecht@gmail.com</h5>
          </span>
          <span>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="3x"
              data-fa-transform="grow-6"
              className="icon"
            />
            <h5 className="contactLink">linkedin.com/in/rozalbrecht</h5>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
