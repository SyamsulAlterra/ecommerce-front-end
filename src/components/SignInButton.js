import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter } from "react-router-dom";
const axios = require("axios");

class SignInButton extends React.Component {
  handleLogin = async () => {
    await axios
      .post("http://127.0.0.1:5001/welcome/login", {
        nama: this.props.username,
        password: this.props.password
      })
      .then(async response => {
        console.log(response.data.token);
        console.log(response.data.message);
        if (response.data.token !== undefined) {
          localStorage.setItem("token", response.data.token);
          this.props.history.push("/theMarket");
        } else {
          alert("please check your username and password");
        }
      });

    // this.props.setLoginStatus(true);
    // this.props.history.push("/theMarket");
  };
  handleUsername = e => {
    let user = e.target.value;
    this.props.setUserName(user);
  };
  handlePassword = e => {
    let pass = e.target.value;
    this.props.setPassword(pass);
  };
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-light"
          data-toggle="modal"
          data-target="#signin"
        >
          Sign In
        </button>

        <div
          class="modal fade"
          id="signin"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-dark">
                <h5 class="modal-title white" id="signinTitle">
                  Let's Go
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
                  id="username"
                  onChange={this.handleUsername}
                />{" "}
                <br />
                <label for="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  onChange={this.handlePassword}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-dismiss="modal"
                  onClick={this.handleLogin}
                >
                  Log In
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
  "username, password",
  actions
)(withRouter(SignInButton));
