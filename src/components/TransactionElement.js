import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import TransactionDetail from "./TransactionDetail";

class TransactionElement extends React.Component {
  render() {
    return (
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target={"#transaction" + this.props.id.toString()}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Transaction #{this.props.id.toString()}
              </button>
            </h5>
          </div>

          <div
            id={"transaction" + this.props.id.toString()}
            class="collapse hidden"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <TransactionDetail id={this.props.id.toString()} />
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
)(withRouter(TransactionElement));
