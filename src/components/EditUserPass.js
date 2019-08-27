import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";
import { async } from "q";

class EditUserPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: this.props.value.id,
      name: "",
      password: '',
      confirmPass: ''
    };
  }

  handleName = e => {
    let p = e.target.value;
    this.setState({ name: p });
  };

  handlePassword = e => {
    let p = e.target.value;
    this.setState({ password: p });
  };

  handleConfirmPass = e => {
    let p = e.target.value;
    this.setState({ confirmPass: p });
  };

  changeUserPass = async () => {
      if (this.state.password != this.state.confirmPass){
          alert ('your password did not match')
      } else {
          let config = {
              method: 'post',
              url : this.props.baseUrl + '/user/beli',
              headers: {
                  'Authorization': 'Bearer '+localStorage.getItem('token')
              },
              data:{
                  'nama':this.state.name,
                  'password':this.state.password
              }
          }

          let response = await Axios(config)
          alert(response.data.message)
          this.props.history.push('/theMarket')
      }
  };

  render() {
    return (
      <div className='align-center'>
        <button
          className="btn btn-warning p-3 mt-3"
          data-toggle="modal"
          data-target='#editProfile'
        >
          Edit Profile
        </button>

        <div
          class="modal fade"
          id="editProfile"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header bg-dark">
                <h5 class="modal-title white" id="exampleModalLongTitle">
                  Enter your new username and password
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
              <div class="modal-body align-center">
                <p className="mb-0 mt-1">username:</p>
                <input
                  type="text"
                  placeholder='username'
                  onChange={this.handleName}
                />
                <br />
                <p className="mb-0 mt-1">password:</p>
                <input
                  type="password"
                  placeholder='password'
                  onChange={this.handlePassword}
                />
                <br />
                <p className="mb-0 mt-1">confirm password</p>
                <input
                  type="password"
                  placeholder='password'
                  onChange={this.handleConfirmPass}
                />
                <br />
              </div>
              <div class="modal-footer">
                <button
                  to="/theMarket"
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  onClick={this.changeUserPass}
                >
                  Ok
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
  "username, password, email, userSignUp, passwordSignUp, confirmPassword, token, baseUrl",
  actions
)(withRouter(EditUserPass));
