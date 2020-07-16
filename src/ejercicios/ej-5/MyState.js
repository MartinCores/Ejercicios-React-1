import React, { useState } from "react";

const MyState = () => {
  const myText = " Hola mundo!";
  const [state, setState] = useState(myText);
  return (
    <div className="alert alert-primary" onClick={this}>
      <p>El valor por defecto del estado es:{state}</p>
    </div>
  );
};

export default MyState;
