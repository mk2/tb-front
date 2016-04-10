import React, { Component } from "react";

export default class Content extends Component {

  style() {
    return {
      flex: 1
    };
  }

  render() {
    return (
      <div style={this.style()}>
      </div>
    );
  }

}
