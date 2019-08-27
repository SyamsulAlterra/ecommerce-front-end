import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter } from "react-router-dom";
import ItemCard from "./ItemCard";

class CardRow extends React.Component {
  render() {
    if (this.props.value2 !== undefined) {
      return (
        <div className="cardRow">
          <div class="container">
            <div class="row no-gutters">
              <div class="col px-1">
                <ItemCard value={this.props.value1} />
              </div>
              <div class="col px-1">
                <ItemCard value={this.props.value2} />
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
              <div class="col px-1">
                <ItemCard value={this.props.value1} />
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
)(withRouter(CardRow));
