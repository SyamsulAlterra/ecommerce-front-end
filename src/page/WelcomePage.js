import React from "react";
import { connect } from "unistore/react";
import { actions } from "../components/store";
import HeaderWelcome from "../components/HeaderWelcome";
import ForgotPassword from "../components/ForgotPassword";

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="welcomePage">
        <HeaderWelcome />
        <ForgotPassword></ForgotPassword>
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class=""
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="karosel-box">
          <div
            id="carouselExampleIndicators"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-interval="1000">
                <div class="container">
                  <div class="row centering">
                    <div class="col">
                      <div className="bm-logo-box">
                        <img
                          src="https://www.redcandy.com.au/images/2017/07/Black-Market_NameBrand.jpg"
                          class="bm-logo d-block"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-interval="1000">
                <div class="container">
                  <div class="row centering">
                    <div class="col">
                      <div className="bm-logo-box">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/0/01/WHBM_Logo.png"
                          class="bm-logo"
                          alt="https://upload.wikimedia.org/wikipedia/commons/0/01/WHBM_Logo.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-interval="1000">
                <div class="container">
                  <div class="row centering">
                    <div class="col">
                      <div className="bm-logo-box">
                        <img
                          src="https://www.wallquotes.com/sites/default/files/insp0038.png"
                          class="bm-logo"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    // <div onClick={this.handleClick}>{this.props.loginStatus}</div>;
  }
}

export default connect(
  "loginStatus, token",
  actions
)(WelcomePage);
