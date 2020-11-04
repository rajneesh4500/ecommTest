import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./header/navbar-general";

import Home from "./components/home/home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="product-view">
        <Switch>
          <Route exact path="/" render={() => <Home pagePath="home" />} />
          <Route
            path="/Recommendation"
            render={() => (
              <div>
                <Home pagePath="recommendation" />
              </div>
            )}
          />
          <Route
            path="/TodaysDeal"
            render={() => <Home pagePath="todaysdeal" />}
          />
        </Switch>
      </div>
      <hr />
    </BrowserRouter>
  );
};

export default AppRouter;
