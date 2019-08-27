import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter } from "react-router-dom";
import CardRow from "./CardRow";
import Axios from "axios";

class CardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theData: [], listPemilik: [] };
  }

  tidyUpData = arr => {
    let dataLength = arr.length;
    let a = Math.ceil(dataLength / 2);
    let myData = [];

    for (let i = 0; i < a; i++) {
      myData.push([arr[i * 2], arr[2 * i + 1]]);
    }
    return myData;
  };

  componentDidMount = async () => {
    let config = {
      method: "post",
      url: "api.syamsul.club/user/all",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      params: {
        text: ""
      }
    };

    let config2 = {
      method: "get",
      url: "api.syamsul.club/user/nota/all",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    let unpaidNota = await Axios(config2);

    unpaidNota = unpaidNota.data["unpaid items"];
    this.props.setItemInBag(unpaidNota.length);

    let response = await Axios(config);
    let myData = this.tidyUpData(response.data);
    console.log(myData);
    this.props.setSearchList(myData);
  };

  render() {
    return (
      <div className="cardGrid">
        {this.props.searchList.map((data, index) => {
          return <CardRow value1={data[0]} value2={data[1]} />;
        })}
      </div>
    );
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token, searchList, searchText",
  actions
)(withRouter(CardGrid));
