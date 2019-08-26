import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: this.props.value.id,
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

  editStuff = async () => {
    let config = {
      method: "put",
      url:
        "http://127.0.0.1:5001/user/myshop/" + this.props.value.id.toString(),
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
    this.props.history.push("/theMarket");
  };
  render() {
    console.log(this.props.value);
    return (
      <div>
        <button
          className="btn btn-warning m-1"
          data-toggle="modal"
          data-target={"#edit" + this.props.value.id.toString()}
        >
          Edit
        </button>

        <div
          class="modal fade"
          id={"edit" + this.props.value.id.toString()}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header bg-dark">
                <h5 class="modal-title white" id="exampleModalLongTitle">
                  Edit {this.props.value.nama_barang}
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
                <p>
                  Enter your new description for {this.props.value.nama_barang}
                </p>
                <p className="mb-0 mt-1">Stuff Name:</p>
                <input
                  type="text"
                  placeholder={this.props.value.nama_barang}
                  onChange={this.handleStuffName}
                />
                <br />
                <p className="mb-0 mt-1">Price</p>
                <input
                  type="number"
                  placeholder={this.props.value.harga_satuan}
                  onChange={this.handlePrice}
                />
                <br />
                <p className="mb-0 mt-1">Stock</p>
                <input
                  type="number"
                  placeholder={this.props.value.qty}
                  onChange={this.handleQty}
                />
                <br />
                <p className="mb-0 mt-1">Url image</p>
                <input type="text" onChange={this.handleImage} />
                <br />
              </div>
              <div class="modal-footer">
                <button
                  to="/theMarket"
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  onClick={this.editStuff}
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                >
                  Cancel
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
)(withRouter(EditButton));
