import React from "react";
import { Route, Link } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import * as actions from "actions";
import { connect } from "react-redux";

class App extends React.Component {
  renderButton() {
    return (
      <div>
        {this.props.auth ? (
          <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
        ) : (
          <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
        )}
      </div>
    );
  }
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        <span>{this.renderHeader()}</span>
        <Route path="/post" component={CommentBox} />
        <Route path="/" component={CommentList} exact />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
