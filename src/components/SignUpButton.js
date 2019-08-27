import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter } from "react-router-dom";
const axios = require("axios");

class SignUpButton extends React.Component {
  handleSignUp = async () => {
    if (this.props.passwordSignUp != this.props.confirmPassword) {
      alert("your password did not match");
    } else {
      await axios
        .post(this.props.baseUrl + "/welcome/signup", {
          nama: this.props.userSignUp,
          email: this.props.email,
          password: this.props.passwordSignUp
        })
        .then(response => {
          console.log(response.data);
          alert(response.data.message);
        });
    }
    // this.props.history.push("/successSignUp");
  };
  handleUsername = e => {
    let user = e.target.value;
    this.props.setUserSignUp(user);
  };
  handleEmail = e => {
    let email = e.target.value;
    this.props.setEmail(email);
  };
  handlePassword = e => {
    let pass = e.target.value;
    this.props.setPasswordSignUp(pass);
  };
  handleConfirmPassword = e => {
    let cPass = e.target.value;
    this.props.setConfirmPassword(cPass);
  };
  render() {
    console.log(this.props.userSignUp);
    console.log(this.props.email);
    console.log(this.props.passwordSignUp);
    console.log(this.props.confirmPassword);

    return (
      <div>
        <button
          type="button"
          class="btn btn-light"
          data-toggle="modal"
          data-target="#signup"
        >
          Sign Up
        </button>

        <div
          class="modal fade"
          id="signup"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-dark">
                <h5 class="modal-title white" id="signinTitle">
                  Be Part of The Black Market
                </h5>
                <button
                  type="button"
                  class="close white"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <label for="username">Username</label>
                <br />
                <input
                  type="text"
                  id="usernameSignUp"
                  onChange={this.handleUsername}
                />{" "}
                <br />
                <label for="email">Email</label>
                <br />
                <input type="email" id="email" onChange={this.handleEmail} />
                <br />
                <label for="passwordSignUp">Password</label>
                <br />
                <input
                  type="passwordSignUp"
                  id="passwordSignOut"
                  onChange={this.handlePassword}
                />
                <br />
                <label for="confirmPasswordSignUp">Confirm Password</label>
                <br />
                <input
                  type="password"
                  id="confirmPasswordSignUp"
                  onChange={this.handleConfirmPassword}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                  onClick={this.handleSignUp}
                >
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "username, password, userSignUp, email, passwordSignUp, confirmPassword, baseUrl",
  actions
)(withRouter(SignUpButton));
