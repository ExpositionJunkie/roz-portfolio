import React from "react";
import "../../Styles/Home.css";

function Home() {
  return (
    <div class="homeDark">
      <h1 class="hello">Hi, I'm Roz</h1>
      <h1 class="tagline">[fullstack MERN developer]</h1>
      <img
        src="/keyboardBlack.jpg"
        alt="Black keyboard with brightly colored LEDs shining behind the keys."
      />
      <hr></hr>
      <div class="make">
        <h2>I make things</h2>
        <h1 class="and">&</h1>
        <h2>solve problems</h2>
      </div>

      <hr></hr>

      <img
        src="/fiberOpticDark.jpg"
        alt="Fiber Optic wire backlit by purple blue and green LEDs."
      />

      <hr></hr>
      <h1 class="level">Ready to level up your website?</h1>
      <hr></hr>

      <div>
        <h3 class="stack">S</h3>
        <h3 class="stack">T</h3>
        <h3 class="stack">A</h3>
        <h3 class="stack">C</h3>
        <h3 class="stack">K</h3>

        <h4 class="stackList">
          React <br></br>
          React Native <br></br> Mongo <br></br> Express <br></br> Responsive
          Design <br></br> Node js <br></br> Rest API <br></br> Sass / {" "}SCSS{" "}
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

      <div class="contact">
        <h2 class="contactHead">contact</h2>
        <h5 class="contactLink">github.com/expositionjunkie</h5>
        <h5 class="contactLink">rosalindavalbrecht@gmail.com</h5>
        <h5 class="contactLink">linkedin.com/in/rozalbrecht</h5>
      </div>
    </div>
  );
}

export default Home;
