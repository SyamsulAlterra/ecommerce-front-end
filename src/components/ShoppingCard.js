import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";
import DeleteFromBag from "./DeleteFromBag";

class ShoppingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
  }

  handleQty = e => {
    console.log(e.target.value);
    this.setState({ qty: e.target.value });
  };

  validateQty = async () => {
    let config = {
      method: "put",
      url: "api.syamsul.club/user/nota/" + this.props.value.id_barang,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data: {
        qty: this.state.qty
      }
    };

    let response = await Axios(config);
    if (response.data.message !== undefined) {
      alert(response.data.message);
    }
    this.props.history.replace("/theMarket");
  };

  render() {
    console.log(this.props.value);
    return (
      <div className="itemCard animated zoomIn">
        <div class="card my-3 mx-3 shadow hovering">
          <div class="row no-gutters">
            <div class="col-6">
              <img
                src={this.props.value.url_image}
                class="card-img"
                alt="..."
              />
            </div>
            <div class="col-6">
              <div class="card-body">
                <h5 class="card-title">{this.props.value.nama_barang}</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                {/* <p class="card-text"> */}
                <small class="font-black">
                  Owner : {this.props.value.nama_pemilik} (rating:{" "}
                  {this.props.value.rating})
                </small>
                <br />
                {/* </p> */}
                <small class="font-black">
                  Quantity in your bag: {this.props.value.buy_qty}
                </small>
                <br />
                <small class="font-black">
                  Total for this item: {this.props.value.sub_total}
                </small>
                <br />
                <DeleteFromBag value={this.props.value} />
                <button className="btn btn-dark m-1" onClick={this.validateQty}>
                  edit qty
                </button>
                <input
                  type="number"
                  className="cardQty m-1"
                  onChange={this.handleQty}
                />
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
)(withRouter(ShoppingCard));
