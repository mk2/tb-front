import React, { PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions/index";
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

App.propTypes = {
  tbfront: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    tbfront: state.tbfront
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
