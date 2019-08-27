import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";

class DeleteFromBag extends React.Component {
  dropItemShop = async () => {
    // console.log(this.props.value.id.toString());
    let config = {
      method: "delete",
      url:
        this.props.baseUrl + "/user/myshop/" + this.props.value.id.toString(),
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let response = await Axios(config);
    alert(response.data.message);
    this.props.history.push("/theMarket");
  };

  render() {
    console.log(this.props.value.id);
    return (
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target={"#delFromShop" + this.props.value.id.toString()}
              >
                Delete Item
              </button>
            </h5>
          </div>

          <div
            id={"delFromShop" + this.props.value.id.toString()}
            class="collapse hidden"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p className="m-0"> Are you sure?</p>
              <button className="btn btn-danger" onClick={this.dropItemShop}>
                yes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, baseUrl",
  actions
)(withRouter(DeleteFromBag));
