import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";

class DropBag extends React.Component {
  dropBag = async () => {
    let config = {
      method: "delete",
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
      <div className="delete">
        <button
          className="btn btn-dark m-2"
          data-toggle="modal"
          data-target="#dropBagModal"
        >
          Delete All Stuffs
        </button>

        <div
          class="modal fade"
          id="dropBagModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header bg-dark">
                <h5 class="modal-title white" id="exampleModalLongTitle">
                  Are you Sure ?
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
                Do you want to drop all your stuff in shopping bag?
              </div>
              <div class="modal-footer">
                <Link
                  to="/theMarket"
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  onClick={this.dropBag}
                >
                  Yes, I'll get another
                </Link>
                <button
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                >
                  Nope
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
)(withRouter(DropBag));
