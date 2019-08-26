import React from "react";
import CardGrid from "../components/CardGrid";
import Header from "../components/Header";
import { connect } from "unistore/react";
import { actions } from "../components/store";
import Weather from "../components/Weather";

class TheMarket extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Weather />
        <CardGrid />
      </div>
    );
  }
}

export default connect(
  "token",
  actions
)(TheMarket);
