import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter } from "react-router-dom";
import ShoppingCard from "./ShoppingCard";
import SellCard from "./SellCard";

class SellRow extends React.Component {
  render() {
    if (this.props.value2 !== undefined) {
      return (
        <div className="cardRow">
          <div class="container">
            <div class="row no-gutters">
              <div class="col-lg px-1">
                <SellCard value={this.props.value1} />
              </div>
              <div class="col-lg px-1">
                <SellCard value={this.props.value2} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="cardRow">
          <div class="container">
            <div class="row no-gutters">
              <div class="col-md-6 px-1">
                <SellCard value={this.props.value1} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword",
  actions
)(withRouter(SellRow));
