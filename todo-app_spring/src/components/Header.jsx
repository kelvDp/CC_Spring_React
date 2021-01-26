import React, { Component } from "react";
import {Link, withRouter} from "react-router-dom"; // use withRouter to update links dynamically
import AuthService from "../AuthService";
import TodoService from "../apiCalls/TodoService";
import "../styles/App.css";

class Header extends Component {
  render() {

  let username = TodoService.findUserName();


    const isLoggedIn = AuthService.isLoggedIn();
    
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <Link className="navbar-brand" to="/">
              KDesign
            </Link>
          </div>

          <ul className="navbar-nav">
            {isLoggedIn && <li>
              <Link className="nav-link" to={`/welcome/${username}`}>
                Home
              </Link>
            </li>}
            {isLoggedIn && <li>
              <Link className="nav-link" to={`/users/${username}/todo`}>
                Tasks
              </Link>
            </li>}
          </ul>

          <ul className="navbar-nav navbar-collapse justify-content-end">
           {!isLoggedIn && <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>}
            {isLoggedIn && <li>
              <Link
                className="nav-link"
                to="/logout"
                onClick={AuthService.logout}
              >
                Logout
              </Link>
            </li>}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
