import React, { Component } from "react";
class Box extends Component {
  handleClick(e) {
    this.props.handleClick(e);
  }
  render() {
    const { index, box } = this.props;

    return (
      <div
        className="box"
        key={index}
        onClick={() => {
          this.handleClick(index);
        }}
      >
        <div className="text"> {box}</div>
      </div>
    );
  }
}
export default Box;
