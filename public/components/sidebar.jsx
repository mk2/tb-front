import React, { Component, PropTypes } from "react";

/**
 * Sidebar element component
 * - holds each article information
 */
class SidebarElement extends Component {

  style() {
    return {
      width: 300,
      color: "#EEEEEE",
      background: "-webkit-gradient(linear, left top, left bottom, from(#3D4B52), to(#263238)",
      listStyleType: "none"
    };
  }

  render() {
    return (
      <li style={this.style()}>
        <div>{this.props.data.title}</div>
        <div>{this.props.data.brief}</div>
        <div>{this.props.data.author}</div>
        <div>{this.props.data.date}</div>
      </li>
    );
  }
}

/**
 * Search query input component
 */
class SidebarSearch extends Component {

  style() {
    return {
      display: "inline-blodk",
      border: "1px solid transparent",
      background: "transparent",
      width: "100%",
      WebkitTapHighlightColor: "transparent"
    };
  }

  render() {
    return (
      <div>
        <input style={this.style()} type="text" placeholder="Search" />
      </div>
    );
  }
}

/**
 * Sidebar component
 * - show search component
 * - show articles list
 */
export default class Sidebar extends Component {

  style() {
    return {
      backgroundColor: "#3A4F5C"
    };
  }

  render() {
    return (
      <div style={this.style()}>
        <SidebarSearch />
        <ul>
        {this.props.results.map(result => {
          return <SidebarElement key={result.id} data={result} />
        })}
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  results: PropTypes.array.isRequired
};
