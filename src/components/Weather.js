import React from "react";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import Axios from "axios";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      region: "",
      country: "",
      temp_c: 0,
      wind_kph: 0,
      condition: "",
      icon: ""
    };
  }

  getWeather = async input => {
    let config = {
      method: "get",
      url: "http://api.apixu.com/v1/current.json",
      params: {
        q: input,
        key: "22e6b77487994031b5364243192508"
      }
    };

    let response = await Axios(config);
    let data = response.data;
    await this.setState({
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      temp_c: data.current.temp_c,
      wind_kph: data.current.wind_kph,
      condition: data.current.condition.text,
      icon: data.current.condition.icon
    });
  };
  componentDidMount = async () => {
    this.getWeather("Malang");
  };
  handleWeatherInput = async e => {
    let input = e.target.value;
    if (input === "") {
      this.getWeather("Malang");
    } else {
      this.getWeather(input);
    }
  };
  render() {
    return (
      <div>
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-dark centering p-3 align-center checkWeatherButton"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Click here to check weather
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse hidden"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div className="container">
                  <div className="row no-gutters">
                    <div className="col-8 align-right">
                      <input
                        type="text"
                        placeholder="Enter the city here"
                        onChange={this.handleWeatherInput}
                      />
                      <h5 className="m-0">
                        {this.state.name +
                          ", " +
                          this.state.region +
                          ", " +
                          this.state.country}
                      </h5>
                      <p className="m-0">temp (C): {this.state.temp_c}</p>
                      <p className="m-0">wind (km/h): {this.state.wind_kph}</p>
                      <p className="m-0">{this.state.condition}</p>
                    </div>
                    <div className="col-4">
                      <img src={this.state.icon} className="weather-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "username, password, email, userSignUp, passwordSignUp, confirmPassword",
  actions
)(withRouter(Weather));
