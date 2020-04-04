import React from "react";

import A from "./A";

import House from "./house.jpeg";

class ClassComp extends React.Component {
  state = { count: 0 };

  clickHandle = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  clickHandle2 = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div>
        <p>Class Component</p>
        <button onClick={this.clickHandle}>Increment</button>
        <button onClick={this.clickHandle2}>Decrement</button>
        <p>Count Is: {this.state.count}</p>
        <A />
        <img src={House} />
      </div>
    );
  }
}

export default ClassComp;
