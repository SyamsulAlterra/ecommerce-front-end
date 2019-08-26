import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";

class BuyBag extends React.Component {
  payBag = async () => {
    let config = {
      method: "post",
      url: "http://127.0.0.1:5001/user/nota/all",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let response = await Axios(config);
    console.log(response);
    this.props.history.push("/theMarket");
  };
  render() {
    return (
      <div className="pay">
        <button
          className="btn btn-dark m-2"
          data-toggle="modal"
          data-target="#buyBagModal"
        >
          Pay All Stuffs
        </button>

        <div
          class="modal fade"
          id="buyBagModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header bg-dark">
                <h5 class="modal-title white" id="exampleModalLongTitle">
                  Great, One final step
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {" "}
                Make sure you have checked all your stuffs in the shopping bag
              </div>
              <div class="modal-footer">
                <Link
                  to="/theMarket"
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                  onClick={this.payBag}
                >
                  Cool, I did check my bag
                </Link>
                <button type="button" class="btn btn-dark" data-dismiss="modal">
                  Let me check my bag again
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
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token",
  actions
)(withRouter(BuyBag));
