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

  render() {
    return (
      <div>
        <input type="text" />
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

  dummyData() {
    return [
      {
        id: "01",
        title: "Dummy Article 01",
        brief: "Dummy article desc",
        author: "Dummy Author",
        date: "2016/04/10 18:11 JST"
      },
      {
        id: "02",
        title: "Dummy Article 02",
        brief: "Dummy article desc",
        author: "Dummy Author",
        date: "2016/04/10 10:11 JST"
      },
      {
        id: "03",
        title: "Dummy Article 03",
        brief: "Dummy article desc",
        author: "Dummy Author",
        date: "2016/04/09 18:11 JST"
      }
    ];
  }

  style() {
    return {
      backgroundColor: "#3A4F5C"
    };
  }

  render() {
    return (
      <ul style={this.style()}>
      {this.props.results.map(result => {
        return <SidebarElement key={result.id} data={result} />
      })}
      </ul>
    );
  }
}

Sidebar.propTypes = {
  results: PropTypes.array.isRequired
};
