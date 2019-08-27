import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";

class TransactionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
        nota_list: [],
        total: 0
      },
      ratingValue: 0
    };
  }
  componentDidMount = async () => {
    let config = {
      method: "patch",
      url: "api.syamsul.club/user/transactions/" + this.props.id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let response = await Axios(config);
    this.setState({ detail: response.data });
  };

  handleRate = async seller_id => {
    let config = {
      method: "post",
      url: "api.syamsul.club/user/give_rating/" + seller_id.toString(),
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data: {
        rating: this.state.ratingValue
      }
    };

    let response = await Axios(config);
    alert(response.data.message);
  };

  handleRateValue = e => {
    this.setState({ ratingValue: e.target.value });
  };

  render() {
    console.log(this.state.ratingValue);
    return (
      <div class="transactionDetail">
        <div class="px-5">
          <div class="container border p-2">
            <div class="row">
              <div className="col-1">
                <p className="m-0">ID</p>
              </div>
              <div className="col-2">
                <p className="m-0">Nama</p>
              </div>
              <div className="col-2">
                <p className="m-0">Penjual</p>
              </div>
              <div className="col-1">
                <p className="m-0">Qty</p>
              </div>
              <div className="col-2">
                <p className="m-0">Satuan</p>
              </div>
              <div className="col-2">
                <p className="m-0">Sub Total</p>
              </div>
              <div className="col-2">
                <p className="m-0 mb-3">...</p>
              </div>
            </div>

            {this.state.detail.nota_list.map(nota => {
              return (
                <div class="row">
                  <div className="col-1">
                    <p className="m-0">{nota.id_barang}</p>
                  </div>
                  <div className="col-2">
                    <p className="m-0">{nota.nama_barang}</p>
                  </div>
                  <div className="col-2">
                    <p className="m-0">{nota.pemilik}</p>
                  </div>
                  <div className="col-1">
                    <p className="m-0">{nota.qty}</p>
                  </div>
                  <div className="col-2">
                    <p className="m-0">{nota.harga_satuan}</p>
                  </div>
                  <div className="col-2">
                    <p className="m-0">{nota.sub_total}</p>
                  </div>
                  <div className="col-2 btn btn-info p-0 mb-3">
                    <button
                      className="m-0 pButton btn btn-info"
                      onClick={() => this.handleRate(nota.id_pemilik)}
                    >
                      Rate {nota.pemilik}
                    </button>
                    <input type="number" onChange={this.handleRateValue} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <br />
        <p>Total Keseluruhan: {this.state.detail.total}</p>
      </div>
    );
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token",
  actions
)(withRouter(TransactionDetail));
