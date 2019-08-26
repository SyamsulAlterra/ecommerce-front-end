import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";

class DeleteStuff extends React.Component {
  render() {
    return (
      <div className="getStarted">
        <div class="container">
          <div class="row no-gutters">
            <div class="col">
              <div class="getStartedBox border align-center">
                <h1 className="align-center p-2">
                  Are you sure want to drop all your stuff in 'The Shop'
                </h1>
                <Link to="/myShop">
                  <button className="btn btn-danger centering">Delete</button>
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
)(withRouter(DeleteStuff));
