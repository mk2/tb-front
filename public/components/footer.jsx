import React, { Component } from "react";

const Footer = React.createClass({

  style() {
    return {
      height: "1.5em",
      width: '100vw',
      color: "#EEEEEE",
      backgroundColor: "#263238"
    };
  },

  render() {
    return (
      <div style={this.style()}>
        Under development
      </div>
    );
  }

});

export default Footer;
