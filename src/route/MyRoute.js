import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "../components/store";
import WelcomePage from "../page/WelcomePage";
import TheMarket from "../page/TheMarket";
import ProfilePage from "../page/ProfilePage";
import ShoppingBag from "../page/ShoppingBag";
import MyShop from "../page/MyShop";
import TopUp from "../page/TopUp";

class MyRoute extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/theMarket" component={TheMarket} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/shoppingBag" component={ShoppingBag} />
            <Route exact path="/myShop" component={MyShop} />
            <Route exact path="/topup" component={TopUp} />
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default MyRoute;
