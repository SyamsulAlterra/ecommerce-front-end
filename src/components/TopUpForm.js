import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";

class TopUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nominal: 0 };
  }
  handleNominal = e => {
    let nom = e.target.value;
    this.setState({ nominal: nom });
  };
  topup = async () => {
    let config = {
      method: "put",
      url: "http://127.0.0.1:5001/user/topup",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data: {
        topup: this.state.nominal
      }
    };
    let response = Axios(config);
    console.log(response.data);
  };
  render() {
    console.log(this.state.nominal);
    return (
      <div className="topUpForm">
        <div class="container">
          <div class="row no-gutters">
            <div class="col">
              <div class="getStartedBox border align-center">
                <p>current saldo</p>
                <h1 className="align-center">{this.props.value.saldo}</h1>
                <p>Enter your nominal top up</p>
                <select id="topUp" onChange={this.handleNominal}>
                  <option value={0}>-</option>
                  <option value={10000}>10.000</option>
                  <option value={25000}>25.000</option>
                  <option value={50000}>50.000</option>
                  <option value={100000}>100.000</option>
                </select>
                <br /> <br />
                <Link to="/theMarket">
                  <button
                    className="btn btn-success centering m-2"
                    onClick={this.topup}
                  >
                    Top Up
                  </button>
                </Link>
                <span> </span>
                <Link to="/theMarket">
                  <button className="btn btn-danger centering m-2">
                    Not now
                  </button>
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
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token",
  actions
)(withRouter(TopUpForm));
