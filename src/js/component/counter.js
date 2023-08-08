import React from 'react';

const CountdownTimer=({numero1, numero2,numero3, numero4, numero5, numero6})=> {
    

    return (
      <div className="d-flex bg-dark text-white p-4 justify-content-center fw-bolder fs-3 contenedor">
         <p><i class="fa-regular fa-clock reloj" ></i></p>
         <div className="digits col text-white">{numero6}</div>
         <div className="digits col text-white">{numero5}</div>
         <div className="digits col text-white">{numero4}</div>
         <div className="digits col text-white">{numero3}</div>
         <div className="digits col text-white">{numero2}</div>
         <div className="digits col text-white">{numero1}</div>
       
      </div>
    );
}

export default CountdownTimer;