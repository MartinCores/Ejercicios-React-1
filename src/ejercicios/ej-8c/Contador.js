import React, { useState } from "react";
import Par from "./Par";
import Impar from "./Impar";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cont: 0 };
  }
  counterSum = () => this.setState({ cont: this.state.cont + 1 });
  soyPar = (num) => {
    // Esta función regresa un TRUE si el número es par o FALSE si es impar. (No es necesario modificar esta función)
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };
  render() {
    return (
      <div className="alert alert-primary">
        <p>Has dado {this.state.cont} clicks</p>
        <button onClick={() => this.counterSum(this.state.cont)}>suma 1</button>
        {this.soyPar(this.state.cont) ? <Par /> : <Impar />}
      </div>
    );
  }
}

export default Contador;
