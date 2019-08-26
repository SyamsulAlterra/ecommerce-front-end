import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";

class GetStarted extends React.Component {
  render() {
    return (
      <div className="getStarted">
        <div class="container">
          <div class="row no-gutters">
            <div class="col">
              <div class="getStartedBox border align-center">
                <h1 className="align-center">Welcome to The Black Market</h1>
                <Link to="/">
                  <button className="btn btn-danger centering">Got It</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword",
  actions
)(withRouter(GetStarted));
