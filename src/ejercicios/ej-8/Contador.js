import React, { useState } from "react";
import Par from "./Par";
import Impar from "./Impar";

const Contador = () => {
  const [counter, setCounter] = useState(0);

  const soyPar = (num) => {
    // Esta función regresa un TRUE si el número es par o FALSE si es impar. (No es necesario modificar esta función)
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };
  // PISTA: Puedes utilizar operadores ternarios
  // PISTA 2: https://reactjs.org/docs/conditional-rendering.html

  return (
    <div className="alert alert-primary">
      <p>Has dado {counter} clicks</p>
      <button onClick={() => setCounter(counter + 1)}>suma 1</button>
      {soyPar(counter) ? <Par /> : <Impar />}
    </div>
  );
};

export default Contador;
