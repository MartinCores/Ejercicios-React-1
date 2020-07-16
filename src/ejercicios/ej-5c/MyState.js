import React from "react";

const myText = " Hola mundo!";
class MyState extends React.Component {
  constructor(props) {
    super(props);
    this.state = myText;
  }
  render() {
    return (
      <div className="alert alert-primary">
        <p>El valor por defecto del estado es:{this.state}</p>
      </div>
    );
  }
}

export default MyState;
