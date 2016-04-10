import React, { Component } from "react";

export default class Header extends Component {

  style() {
    return {
      height: "1.5em",
      width: '100vw',
      color: "#EEEEEE",
      backgroundColor: "#263238"
    };
  }

  render() {
    return (
      <div style={this.style()}>
      Textbox
      </div>
    );
  }
}
