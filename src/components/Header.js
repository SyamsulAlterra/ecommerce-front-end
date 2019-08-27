import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Search from "./Search";
import Axios from "axios";
import Weather from "./Weather";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
  }
  handleSignOut = async () => {
    console.log("tes");
    localStorage.setItem("token", "abc");
    await this.props.setToken("");
    this.props.history.push("/");
  };

  componentDidMount = async () => {
    let config = {
      method: "get",
      url: this.props.baseUrl + "/user/status",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let response = await Axios(config);
    if (response.data.status_penjual) {
      this.setState({ status: "nav-item myshop-button-div bg-success" });
      // alert(response.data.message);
      // this.props.history.push("/myShop");
    } else {
      this.setState({ status: "nav-item myshop-button-div bg-danger" });

      // alert("register as a seller in your profile to acces MyShop");
      // this.props.history.push("/theMarket");
    }
  };

  handleShop = async () => {
    let config = {
      method: "get",
      url: this.props.baseUrl + "/user/status",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let response = await Axios(config);
    // this.setState({ status: response.data.status_penjual });
    if (response.data.status_penjual) {
      // alert(response.data.message);
      this.props.history.push("/myShop");
    } else {
      alert("register as a seller in your profile to acces MyShop");
      this.props.history.push("/profile");
    }
  };

  render() {
    console.log(this.state.status);
    return (
      <div className="header bg-dark">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link to="/theMarket" class="nav-link white" href="#">
              The Market
            </Link>
          </li>
          <li class="nav-item">
            <Link to="shoppingBag" className="nav-link white">
              <p>Shopping Bag ({this.props.itemInBag})</p>
            </Link>
          </li>
          <li class="nav-item">
            <div class="nav-link white">
              <Search />
            </div>
          </li>
          <li class={this.state.status}>
            <div
              to="myShop"
              class="nav-link white"
              href="#"
              onClick={this.handleShop}
            >
              My Shop
            </div>
          </li>
          <li class="nav-item">
            <Link to="topup" class="nav-link white" href="#">
              Top Up
            </Link>
          </li>
          <li class="nav-item">
            <Link to="profile" class="nav-link white" href="#">
              Profile
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" class="nav-link white" onClick={this.handleSignOut}>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token, itemInBag, baseUrl",
  actions
)(withRouter(Header));
