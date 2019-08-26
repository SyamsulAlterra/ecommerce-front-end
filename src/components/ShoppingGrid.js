import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter } from "react-router-dom";
import ShoppingRow from "./ShoppingRow";

class ShoppingGrid extends React.Component {
  render() {
    console.log(this.props.myData);
    return (
      <div className="cardGrid">
        {this.props.myData.map(eachData => {
          return <ShoppingRow value1={eachData[0]} value2={eachData[1]} />;
        })}
      </div>
    );
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token",
  actions
)(withRouter(ShoppingGrid));
