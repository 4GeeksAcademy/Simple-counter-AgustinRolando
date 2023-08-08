//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";




function displayHello() {
    //render your react application
    //            qué vamos a dibujar,    donde lo vamos a dibujar
    ReactDOM.render(<Home /> ,  document.querySelector("#app"));

}


setInterval(displayHello, 1000);