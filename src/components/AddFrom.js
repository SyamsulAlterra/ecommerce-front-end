import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link, Redirect } from "react-router-dom";
import Axios from "axios";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      qty: 0,
      image: ""
    };
  }
  handlePrice = e => {
    let p = e.target.value;
    this.setState({ price: p });
  };

  handleStuffName = e => {
    let p = e.target.value;
    this.setState({ name: p });
  };

  handleQty = e => {
    let p = e.target.value;
    this.setState({ qty: p });
  };
  handleImage = e => {
    let p = e.target.value;
    this.setState({ image: p });
  };
  addStuff = async () => {
    let config = {
      method: "post",
      url: "http://127.0.0.1:5001/user/myshop",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data: {
        nama_barang: this.state.name,
        harga_satuan: this.state.price,
        qty: this.state.qty,
        url_image: this.state.image
      }
    };

    let response = await Axios(config);
    console.log(response.data);
    if (response.data.message !== undefined) {
      alert(response.data.message);
    } else {
      alert("success add stuff");
      this.props.history.push("/theMarket");
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="addForm">
        <div class="container">
          <div class="row no-gutters">
            <div class="col">
              <div class="getStartedBox border align-center my-5">
                <h1 className="align-center black mt-4">description</h1>
                <p className="black">Stuff name:</p>
                <input type="text" onChange={this.handleStuffName} />
                <br />
                <p className="black">Price:</p>
                <input type="number" onChange={this.handlePrice} />
                <br />
                <p className="black">qty:</p>
                <input type="number" onChange={this.handleQty} />
                <br />
                <p className="black">Url image:</p>
                <input type="text" onChange={this.handleImage} />
                <br />
                {/* <Link to="/myShop"> */}
                <br />
                <button
                  className="btn btn-success centering"
                  onClick={this.addStuff}
                >
                  Add my stuff
                </button>
                {/* </Link> */}
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
)(withRouter(AddForm));
