import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import TopUpForm from "../components/TopUpForm";
import { connect } from "unistore/react";
import { actions } from "../components/store";
import Axios from "axios";

class SuccesSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: {} };
  }

  componentDidMount = async () => {
    let config = {
      method: "get",
      url: "http://127.0.0.1:5001/user/status",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    console.log(localStorage.getItem("token"));
    let response = await Axios(config);
    console.log(response.data);
    this.setState({ status: response.data });
  };

  render() {
    return (
      <div className="successSignUp">
        <Header />
        <TopUpForm value={this.state.status} />
      </div>
    );
  }
}

export default connect(
  "token",
  actions
)(withRouter(SuccesSignUp));
