import React from "react";
import Header from "../components/Header";
import SellGrid from "../components/SellGrid";
import AddFrom from "../components/AddFrom";

class MyShop extends React.Component {
  render() {
    return (
      <div className="shoppingBag">
        <Header />
        <div class="row">
          <div class="col-1 bg-dark hShop">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link bg-dark"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                My Stuffs
              </a>
              <a
                class="nav-link bg-dark"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Add Stuffs
              </a>
            </div>
          </div>
          <div class="col-11 bg-light">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <SellGrid />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <AddFrom />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyShop;
