import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
const axios = require("axios");

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
  }

  handleQty = e => {
    // console.log(e.target.value);
    this.setState({ qty: e.target.value });
  };

  addToBag = async () => {
    let config = {
      method: "get",
      url: "http://api.syamsul.club/user/beli/" + this.props.value.id.toString(),
      params: {
        qty: this.state.qty
      },
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    };
    // console.log(host+this.props.value.id.toString())
    await axios(config).then(response => {
      console.log(response.data.message[0]);
      alert(response.data.message);
    });
    this.props.history.push("/shoppingBag");
  };
  render() {
    // console.log(this.state.qty);
    console.log(this.props.pemilik);
    return (
      <div className="itemCard animated jackInTheBox">
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
                <p class="card-text">
                  <small class="font-black">
                    seller: {this.props.value.nama_pemilik}
                  </small>
                  <br />
                  <small class="font-black">
                    seller rating :{this.props.value.rating_penjual}
                  </small>
                  <br />
                  <small class="font-black">
                    stock :{this.props.value.qty}
                  </small>
                  <br />
                  <small class="font-black">
                    harga :{this.props.value.harga_satuan}
                  </small>
                </p>
                <button className="btn btn-success" onClick={this.addToBag}>
                  add to bag
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
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token, itemInBag",
  actions
)(withRouter(ItemCard));
