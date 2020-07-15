import React from "react";
import Hijo from "./Hijo";
import { propTypes } from "react-bootstrap/esm/Image";

const Padre = () => {
  const text = "Hola Mundo";
  return (
    <div className="alert alert-primary">
      <h4>Padre</h4>
      <Hijo text={text} />
    </div>
  );
};

export default Padre;
