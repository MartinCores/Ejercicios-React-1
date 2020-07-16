import React from "react";
import Hijo from "./Hijo";

class Padre extends React.Component {
  printCustomText = () => {
    console.log("NOOOOOOO!");
  };
  render() {
    return (
      <div className="alert alert-primary">
        <h4>Padre</h4>
        <Hijo clickMe={this.printCustomText} />
      </div>
    );
  }
}

export default Padre;
