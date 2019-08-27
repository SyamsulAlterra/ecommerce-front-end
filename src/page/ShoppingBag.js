import React from "react";
import CardGrid from "../components/CardGrid";
import Header from "../components/Header";
import ShoppingGrid from "../components/ShoppingGrid";
import { connect } from "unistore/react";
import { actions } from "../components/store";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";
import DropBag from "../components/DropBag";
import BuyBag from "../components/BuyBag";

class ShoppingBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCost: 0,
      myData: []
    };
  }

  tidyUpData = arr => {
    let n = Math.ceil(arr.length / 2);
    let temp = [];
    for (let i = 0; i < n; i++) {
      temp.push([arr[2 * i], arr[2 * i + 1]]);
    }
    return temp;
  };

  componentDidMount = async () => {
    let config = {
      method: "get",
      url: this.props.baseUrl + "/user/nota/all",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    let unpaidNota = await Axios(config);
    console.log(unpaidNota.data["total"]);
    this.setState({ totalCost: unpaidNota.data["total"] });

    // console.log(unpaidNota.data);
    unpaidNota = unpaidNota.data["unpaid items"];
    this.props.setItemInBag(unpaidNota.length);
    unpaidNota = this.tidyUpData(unpaidNota);
    console.log(unpaidNota);
    this.setState({ myData: unpaidNota });
  };

  render() {
    console.log(this.state.myData);
    if (this.state.totalCost === 0) {
      return (
        <div className="cardGrid">
          <Header></Header>
          <div className="align-center mx-5 my-5">
            <h3>You don't have any stuff in shopping bag</h3>
            <p>let's take a look in "The Market"</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="shoppingBag">
          <Header />
          <div className="align-center">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-4">
                  <BuyBag />
                </div>
                <div className="col-4 btn my-1">
                  <p className="align-center mt-2 mb-0">Total Price:</p>
                  <h1 className="align-center m-0">{this.state.totalCost}</h1>
                </div>
                <div className="col-4">
                  <DropBag />
                </div>
              </div>
            </div>
          </div>
          <ShoppingGrid myData={this.state.myData} />
        </div>
      );
    }
  }
}

export default connect(
  "token, baseUrl",
  actions
)(withRouter(ShoppingBag));
