import React, { Component } from "react";
import AuthService from "../AuthService";
import "../styles/App.css";

class LoginForm extends Component {
  state = {
    username: "kelvdp",
    password: "",
    isInvalid: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    const { username } = this.state;
    const { password } = this.state;

    // if (username === "kelvdp" && password === "test") {
    //   this.props.history.push(`/welcome/${this.state.username}`);
    //   AuthService.login(username, password);
    // } else {
    //   this.setState({ isInvalid: true });
    // }

    // get basic auth from backend
    // AuthService.authorizeHeaders(username, password)
    //   .then(() => {
    //     AuthService.login(username, password);
    //     this.props.history.push(`/welcome/${username}`);
    //   })
    //   .catch(() => {
    //     this.setState({ isInvalid: true });
    //   });

    // get jwt auth from backend
    AuthService.executeJwtService(username, password)
      .then(res => {
        AuthService.login(username, res.data.token);
        this.props.history.push(`/welcome/${username}`);
      })
      .catch(() => this.setState({isInvalid: true}));
  };

  render() {
    return (
      <div>
        <h1>Login</h1>

        {this.state.isInvalid && (
          <div className="alert alert-danger">Invalid Login Credentials</div>
        )}

        <div className="container">
          Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-success" onClick={this.handleClick}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
