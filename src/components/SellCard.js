import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import EditButton from "./EditButton";
import Axios from "axios";
import DeleteFromShop from "./DeleteFromShop";

class SellCard extends React.Component {
  render() {
    return (
      <div className="sellCard">
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
                <p class="card-text descript">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="font-black">
                    Harga: {this.props.value.harga_satuan}
                  </small>
                  <br />
                  <small>Qty: {this.props.value.qty}</small>
                </p>
                <DeleteFromShop value={this.props.value} />
                {/* <button
                  type="button"
                  className="btn-dark m-1"
                  data-toggle="modal"
                  data-target={"#del" + this.props.value.id.toString()}
                >
                  delete from MyShop
                  <div
                    class="modal fade"
                    id={"del" + this.props.value.id.toString()}
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header bg-dark white">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Are you sure want to drop{" "}
                            {this.props.value.nama_barang}?
                          </h5>
                          <button
                            type="button"
                            class="close white"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body black">
                          <div className="container">
                            <div className="row">
                              <div className="col-6">
                                <button
                                  className="btn btn-danger align-center"
                                  onClick={this.dropItemShop}
                                >
                                  Yes
                                </button>
                              </div>
                              <div className="col-6">
                                <button className="btn btn-success align-center">
                                  No
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button> */}
                <EditButton value={this.props.value} />
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
)(withRouter(SellCard));
