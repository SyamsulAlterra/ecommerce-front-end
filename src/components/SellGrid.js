import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter } from "react-router-dom";
import ShoppingRow from "./ShoppingRow";
import SellRow from "./SellRow";
import Axios from "axios";

class SellGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myData: [] };
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
      url: "http://127.0.0.1:5001/user/myshop",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let response = await Axios(config);
    response = this.tidyUpData(response.data["Your items"]);
    console.log(response);
    this.setState({ myData: response });
  };

  render() {
    console.log(this.state.myData);
    if (this.state.myData === []) {
      return <p>No Items</p>;
    } else {
      return (
        <div className="sellGrid">
          {this.state.myData.map(data => {
            return <SellRow value1={data[0]} value2={data[1]} />;
          })}
        </div>
      );
    }
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token",
  actions
)(withRouter(SellGrid));
