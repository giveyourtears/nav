import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {routes, adminRoutes} from "./routes/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import createRoutes from "./helpers/createRoutes";
import { Provider } from "react-redux";
import store from "./helpers/configureStore";
import "./style.scss";
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="application-wrapper">
          <Header />
          <Switch>
          {localStorage.getItem("isLogin") === "N|z5GuOWUZsU48z}83I?5s0nOO8ENvdrR20{GmYj" ? createRoutes(adminRoutes) : createRoutes(routes)}
          <Route path="" component={NotFound}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
