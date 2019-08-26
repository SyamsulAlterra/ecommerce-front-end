import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import logo from "../logo.svg";

class UserProfile extends React.Component {
  render() {
    return (
      <div className="userProfile mt-5 mb-4">
        <div class="card no-gutters">
          <div class="card-body p-0">
            <img
              src="https://www.wallquotes.com/sites/default/files/insp0038.png"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-footer p-0">
            <div class="container">
              <div class="row">
                <div class="col-4 p-0">{this.props.state.status}</div>
                <div class="col-4 p-0">
                  Nama: <br /> {this.props.state.nama}
                </div>
                <div class="col-4 p-0">
                  Rating: <br /> {this.props.state.rating}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token",
  actions
)(withRouter(UserProfile));
