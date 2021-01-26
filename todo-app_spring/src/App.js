import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthRoute from "./components/AuthenticatedRoute";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import UpdateTodo from "./components/UpdateTodo";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <AuthRoute path="/welcome/:name" component={Welcome} />
            <AuthRoute path="/users/:username/todo/:id" component={UpdateTodo} />
            <AuthRoute path="/users/:username/todo" component={List} />
            <AuthRoute path="/logout" component={Logout} />
            <Route path="/*" component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
