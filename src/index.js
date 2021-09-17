import React from "react";
import ReactDOM from "react-dom";
import './Styles/Index.css';
import App from "./App";
//fonts
//auch
import "./fonts/auch/Auch 1.otf";
import "./fonts/auch/Auch 2.otf";
import "./fonts/auch/Auch 3.otf";
//genesys
import "./fonts/genesys/Genesys.ttf";
//glitch
import "./fonts/glitch/Rubik-Glitch-Regular.ttf";
//radiotechnika
import "./fonts/radiotechnika/Radiotechnika.otf";

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
