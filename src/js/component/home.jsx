import React, { useState } from "react";
import CountdownTimer from "./counter";


const Home = ({ numero1, numero2, numero3, numero4, numero5, numero6 }) => {
  return (

    <div className="conteiner-full">
     
      <CountdownTimer numero1={numero1} numero2={numero2} numero3={numero3} numero4={numero4} numero5={numero5} numero6={numero6} />
    </div>
  )
}

export default Home;