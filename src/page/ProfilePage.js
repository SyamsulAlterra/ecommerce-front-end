import React from "react";
import { connect } from "unistore/react";
import { actions } from "../components/store";
import { withRouter, Link } from "react-router-dom";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import Axios from "axios";
import TransactionElement from "../components/TransactionElement";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      rating: "",
      status: "",
      message: "You are now registered as 'Black Seller', Let's sell some item",
      title: "Oops !",
      transactions: [],
      saldo: 0
    };
  }

  beAseller = async () => {
    let config = {
      method: "post",
      url: "http://127.0.0.1:5001/user/status",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let response = await Axios(config);
    console.log(response.data);
    await this.setState({ message: response.data.message });
    if (this.state.message.split(" ")[0] === "congratulations") {
      await this.setState({ title: "Congratulations !" });
    }
  };

  componentDidMount = async () => {
    let config = {
      method: "get",
      url: "http://127.0.0.1:5001/user/status",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    let response = await Axios(config);
    console.log(response.data);
    this.setState({
      nama: response.data.name,
      rating: response.data.rating,
      saldo: response.data.saldo
    });
    if (!response.data.status_penjual) {
      await this.setState({ status: "Only A Buyer" });
    } else {
      await this.setState({ status: "A Buyer and A Seller" });
    }
    let config2 = {
      method: "get",
      url: "http://127.0.0.1:5001/user/transactions",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let response2 = await Axios(config2);
    this.setState({ transactions: response2.data });
  };

  render() {
    console.log(this.state);
    if (this.state.status !== "A Buyer and A Seller") {
      return (
        <div className="profilePage">
          <Header />
          <div class="container">
            <div class="row no-gutters">
              <div class="col">
                <div class="userProfileBox align-center">
                  <UserProfile state={this.state} />
                  <button
                    type="button"
                    class="btn btn-primary btn-dark mt-5"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={this.beAseller}
                  >
                    Be A Seller
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header bg-dark white">
                            <h5 class="modal-title" id="exampleModalLabel">
                              {this.state.title}
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
                            {this.state.message}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h5 className="align-center mt-5">Transaction History: </h5>
          <div class="transactionHistory">
            <div class="container">
              <div class="row">
                <div class="col p-1 trx">
                  {this.state.transactions.map(singleTransactions => {
                    return (
                      <TransactionElement id={singleTransactions.id_nota} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="profilePage">
          <Header />
          <div class="container">
            <div class="row no-gutters">
              <div class="col">
                <div class="userProfileBox align-center">
                  <UserProfile state={this.state} />
                </div>
              </div>
            </div>
          </div>
          <h5 className="align-center mt-5">Transaction History: </h5>
          <div class="transactionHistory">
            <div class="container">
              <div class="row">
                <div class="col p-1 trx">
                  {this.state.transactions.map(singleTransactions => {
                    return (
                      <TransactionElement id={singleTransactions.id_nota} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token",
  actions
)(withRouter(ProfilePage));
