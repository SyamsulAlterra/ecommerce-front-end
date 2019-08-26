import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter } from "react-router-dom";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import DescriptionButton from "./DescriptionButton";

class HeaderWelcome extends React.Component {
  render() {
    return (
      <div className="headerHome my-4">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-4 align-center">
              <SignInButton />
            </div>
            <div class="col-4 align-center">
              <DescriptionButton />
            </div>
            <div class="col-4 align-center">
              <SignUpButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(HeaderWelcome));
