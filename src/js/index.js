//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";



let numero1=0
let numero2=0
let numero3=0
let numero4=0
let numero5=0
let numero6=0
function tiempo() {
    //render your react application
    //            qué vamos a dibujar,    donde lo vamos a dibujar
    ReactDOM.render(<Home numero1={numero1} numero2={numero2} numero3={numero3} numero4={numero4} numero5={numero5} numero6={numero6}/>  ,  document.querySelector("#app"));
numero1++
if(numero1>9){
    numero2++
    numero1=0
}
if (numero2>9) {
    numero3++
    numero2=0

    
}
if (numero3>9) {
    numero4++
    numero3=0
    
}
if (numero4>9) {
    numero3++
    numero4=0
    
}
if (numero5>9) {
    numero4++
    numero5=0
    
}

}


setInterval(tiempo, 1000);
