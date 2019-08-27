import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Search from "./Search";
import Axios from "axios";
import Weather from "./Weather";

class Footer extends React.Component {
  render() {
      return (
          <div className='footer align-center bg-dark white mt-5 p-5'>
              <p>Copyright @ The Black Market 2019</p>
          </div>
      )
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token, itemInBag, baseUrl",
  actions
)(withRouter(Footer));
