import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter } from "react-router-dom";
import logo from "../logo.svg";
import Axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  // componentWillUnmount = () => {
  //   this.setState({ text: "" });
  // };

  handleSearchInput = e => {
    let t = e.target.value;
    this.setState({ text: t });
    this.props.setSearchText(t);
  };
  tidyUpData = arr => {
    let dataLength = arr.length;
    let a = Math.ceil(dataLength / 2);
    let myData = [];

    for (let i = 0; i < a; i++) {
      myData.push([arr[i * 2], arr[2 * i + 1]]);
    }
    return myData;
  };
  search = async () => {
    let config = {
      method: "post",
      url: this.props.baseUrl + "/user/all",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      params: {
        text: this.state.text
      }
    };

    let response = await Axios(config);
    let myData = this.tidyUpData(response.data);
    console.log(myData);
    this.props.setSearchList(myData);
    this.props.history.push("/theMarket");
  };

  render() {
    return (
      <div className="search p-0">
        <p className="centering">
          <img
            src="https://image.flaticon.com/icons/svg/2020/2020822.svg"
            data-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          /><br></br>
        </p>

        {/* <div class="row">
          <div class="col"> */}
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="">
                <input type="text" placeholder='search here' className='align-center searchSpecial' onChange={this.handleSearchInput} />
                <br />
                <div className="centering align-center my-2">
                  <button className="btn btn-info" onClick={this.search}>
                    search
                  </button>
                </div>
              </div>
            </div>
          {/* </div>
        </div> */}
        {/* <div class="btn-group">
          <div
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={logo} />
          </div>
          <div class="dropdown-menu">
            <div>
              <input type="text" className="searchBar" />
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token, searchList, baseUrl",
  actions
)(withRouter(Search));
