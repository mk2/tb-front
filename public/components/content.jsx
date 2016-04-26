import React, { Component, PropTypes } from "react";

const Content = React.createClass({

  style() {
    return {
      flex: 1
    };
  },

  render() {
    return (
      <div style={this.style()}>
      </div>
    );
  }
});

Content.propTypes = {
  article: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Content;
