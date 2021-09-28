import React, { useState, useEffect } from "react";
import "../../Styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";
import Line from "../GlobalComponents/Line";

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rainbowFade = useSpring({
    loop: true,
    config: {
      duration: 2000,
    },
    to: [
      { opacity: 1, color: "rgb(255, 0, 0) " },
      { opacity: 1, color: "rgb(255, 238, 0)" },
      { opacity: 1, color: "rgb(255, 238, 0)" },
      { opacity: 1, color: "rgb(21, 255, 0)" },
      { opacity: 1, color: "rgb(0, 255, 208)" },
      { opacity: 1, color: "rgb(0, 64, 255)" },
      { opacity: 1, color: "rgb(128, 0, 255)" },
      { opacity: 1, color: "rgb(255, 0, 140)" },
    ],
    from: { opacity: 1, color: "rgb(255, 0, 140)" },
  });

  return (
    <div className="homeDark">
      <div className="darkMarginWrap">
        <div className="Parallax">
          <div className="titleWrap">
            <animated.div style={rainbowFade} className="hello">
              Hi, I'm Roz
            </animated.div>
            <div className="tagline">[fullstack MERN developer]</div>
          </div>

          <div className="keyboardDark">
            <img
              src="/keyboardBlack.jpg"
              alt="Black keyboard with brightly colored LEDs shining behind the keys."
            />
          </div>
        </div>
        <Line />
        <div
          className="Parallax1"
          style={{
            transform: `translateY(${offsetY * 0.05}px) translateX(${
              offsetY * 0.85
            }px)`,
          }}
        ></div>
        <div
          className="Parallax2"
          style={{
            transform: `translateY(${offsetY * 0.15}px) translateX(${
              offsetY * 0.25
            }px)`,
          }}
        ></div>
        <div
          className="Parallax3"
          style={{
            transform: `translateY(${offsetY * 0.25}px) translateX(${
              offsetY * 0.75
            }px)`,
          }}
        ></div>
        <div className="makeAndSolve">
          <div className="make">I make things</div>
          <animated.div style={rainbowFade} className="and">
            &
          </animated.div>
          <div className="solve">solve problems</div>
        </div>
        <Line />
        <img
          className="fiberOptic"
          src="/fiberOpticDark.jpg"
          alt="Fiber Optic wire backlit by purple blue and green LEDs."
        />

        <Line />
        <h1 className="level">Ready to level up your website?</h1>
        <Line />
        <div className="stackWrap">
          <div className="stack">
            <div>
              <span aria-hidden="true">S</span>
              <span aria-hidden="true">S</span>S
            </div>
            <div>
              <span aria-hidden="true">T</span>
              <span aria-hidden="true">T</span>T
            </div>
            <div>
              <span aria-hidden="true">A</span>
              <span aria-hidden="true">A</span>A
            </div>
            <div>
              <span aria-hidden="true">C</span>
              <span aria-hidden="true">C</span>C
            </div>
            <div>
              <span aria-hidden="true">K</span>
              <span aria-hidden="true">K</span>K
            </div>
          </div>
          <div className="stackList">
            <li className="sl">React</li>
            <li className="sl">React Native</li>
            <li className="sl">Mongo & Mongoose</li>
            <li className="sl">Express</li>
            <li className="sl">Node JS</li>
            <li className="sl">Responsive Design</li>
            <li className="sl">Rest API</li>
            <li className="sl">SCSS/SASS</li>
            <li className="sl">Bootstrap</li>
            <li className="sl">Figma</li>
            <li className="sl">Requirement Gathering</li>
            <li className="sl">VBA</li>
          </div>
        </div>
        <Line />

        <img
          src="/lightBulbDark.jpg"
          alt="A light bulb backlit by orange and pink fire."
        />
        <Line />
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
