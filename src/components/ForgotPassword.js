import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";
import { async } from "q";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: this.props.value.id,
      username: "",
      email: ''
    };
  }

  handleName = e => {
    let p = e.target.value;
    this.setState({ username: p });
  };

  handleEmail = e => {
    let p = e.target.value;
    this.setState({ email: p });
  };


  forgotPassword = async () => {
      if (this.state.username === '' || this.state.email === ''){
          alert ('please enter your username and email')
      } else {
          let config = {
              method: 'patch',
              url : this.props.baseUrl + '/user/beli',
              data:{
                  'username':this.state.username,
                  'email':this.state.email
              }
          }

          let response = await Axios(config)
          alert(response.data.message)
      }
  };

  render() {
    return (
      <div className='align-center'>
        <button
          className="btn btn-danger p-1 m-0"
          data-toggle="modal"
          data-target='#forgotPassword'
        >
          forgot password
        </button>

        <div
          class="modal fade"
          id="forgotPassword"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header bg-dark">
                <h5 class="modal-title white" id="exampleModalLongTitle">
                  Enter your username and email
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
                <p className="mb-0 mt-1">email:</p>
                <input
                  type="email"
                  placeholder='email'
                  onChange={this.handleEmail}
                />
                <br />
              </div>
              <div class="modal-footer">
                <button
                  to="/theMarket"
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                  onClick={this.forgotPassword}
                >
                  Give my password
                </button>
                <button
                  type="button"
                  class="btn btn-dark"
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
)(withRouter(ForgotPassword));
