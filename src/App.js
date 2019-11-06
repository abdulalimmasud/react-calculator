import React, { Component } from "react";
import Display from "./component/Display";
import ButtonPanel from "./component/buttonPanel/ButtonPanel";
import calculate from "./helper/calculate";

class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null
  };
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };
  render() {
    return (
      <div className="App">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
