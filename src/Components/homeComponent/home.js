import React from "react";
import "../../Styles/Home.css";

function Home() {
  return (
    <div className="homeDark">
      <h1 className="hello">Hi, I'm Roz</h1>
      <h1 className="tagline">[fullstack MERN developer]</h1>

      <div className="keyboardDark">
        <img
          src="/keyboardBlack.jpg"
          alt="Black keyboard with brightly colored LEDs shining behind the keys."
        />
      </div>

      <hr></hr>
      <div className="make">
        <h2>I make things</h2>
        <h1 className="and">&</h1>
        <h2>solve problems</h2>
      </div>

      <hr></hr>

      <img
        src="/fiberOpticDark.jpg"
        alt="Fiber Optic wire backlit by purple blue and green LEDs."
      />

      <hr></hr>
      <h1 className="level">Ready to level up your website?</h1>
      <hr></hr>

      <div>
        <h3 className="stack">S</h3>
        <h3 className="stack">T</h3>
        <h3 className="stack">A</h3>
        <h3 className="stack">C</h3>
        <h3 className="stack">K</h3>

        <h4 className="stackList">
          React <br></br>
          React Native <br></br> Mongo <br></br> Express <br></br> Responsive
          Design <br></br> Node js <br></br> Rest API <br></br> Sass / SCSS{" "}
          <br></br>
          Bootstrap <br></br> Figma <br></br> VBA <br></br>
        </h4>
      </div>

      <hr></hr>

      <img
        src="/lightBulbDark.jpg"
        alt="A light bulb backlit by orange and pink fire."
      />

      <hr></hr>

      <div className="contact">
        <h2 className="contactHead">contact</h2>
        <h5 className="contactLink">github.com/expositionjunkie</h5>
        <h5 className="contactLink">rosalindavalbrecht@gmail.com</h5>
        <h5 className="contactLink">linkedin.com/in/rozalbrecht</h5>
      </div>
    </div>
  );
}

export default Home;
