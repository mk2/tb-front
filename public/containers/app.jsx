import React, { PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions/index";
import Sidebar from "../components/sidebar.jsx!";
import Content from "../components/content.jsx!";
import Header from "../components/header.jsx!";
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
    const { articles, tbfront, actions } = this.props;
    return (
      <div style={this.appStyle()}>
        <Header />
        <div style={this.wrapperStyle()}>
          <Sidebar results={articles} />
          <Content article={[]} actions={[]} />
        </div>
        <Footer />
      </div>
    );
  }
}

App.defaultProps = {
  tbfront: {},
  articles: [],
  actions: {},
}

App.propTypes = {
  tbfront: PropTypes.object.isRequired,
  articles: React.PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
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
