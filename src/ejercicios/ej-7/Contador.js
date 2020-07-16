import React, { useState } from "react";
import MyLabel from "./MyLabel";
import Boton from "./Boton";

const Contador = () => {
  const [counterState, setCounterState] = useState(0);
  const sumaClick = () => {
    setCounterState(counterState + 1);
    // Ingresa aquí tu código para aumentar el contador
    console.log(counterState);
  };
  return (
    <div className="alert alert-primary">
      <MyLabel getClick={counterState} />
      <Boton sumClick={sumaClick} />
    </div>
  );
};

export default Contador;
