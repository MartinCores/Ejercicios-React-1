import React from "react";
import MyLabel from "./MyLabel";
import Boton from "./Boton";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  sumCont = () => this.setState({ counter: this.state.counter + 1 });
  render() {
    return (
      <div className="alert alert-primary">
        <MyLabel getClick={this.state.counter} />
        <Boton sumClick={this.sumCont} />
      </div>
    );
  }
}

export default Contador;
