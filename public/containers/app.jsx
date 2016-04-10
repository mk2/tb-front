import React from "react";
import { connect } from "react-redux";
import Sidebar from "../components/sidebar.jsx!";
import Content from "../components/content.jsx!";
import Footer from "../components/footer.jsx!";

class App extends React.Component {

  appStyle() {
    return {
      minHeight: "100vh",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    };
  }

  wrapperStyle() {
    return {
      display: "flex",
      flex: 1
    }
  }

  render() {
    const { tbfront, actions } = this.props;
    return (
      <div style={this.appStyle()}>
        <div style={this.wrapperStyle()}>
          <Sidebar results={tbfront.articles} />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    tbfront: state.tbfront
  }
}

export default connect(
  mapStateToProps
)(App)
