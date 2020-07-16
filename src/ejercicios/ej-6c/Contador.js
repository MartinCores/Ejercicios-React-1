import React from "react";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cont: 0 };
  }
  setCont = () => this.setState({ cont: this.state.cont + 1 });

  render() {
    return (
      <div className="alert alert-primary">
        <p>
          <b>Has dado {this.state.cont} clicks</b>
        </p>
        <button className="btn btn-info" onClick={this.setCont}>
          suma 1
        </button>
      </div>
    );
  }
}

export default Contador;
