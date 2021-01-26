import React, { Component } from "react";
import { Link } from "react-router-dom";
// import HelloService from "../apiCalls/HelloWordService";

class Welcome extends Component {
  state = {
    welcomeMessage: "",
  };

  // handleRequest = () => {
  //   HelloService.sendRequest()
  //     .then((res) => {
  //       this.setState({ welcomeMessage: res.data.message });
  //     })
  //     .catch((err) => {
  //       let errMsg = "";

  //       if (err.message) {
  //         errMsg += err.message;
  //       }

  //       if (err.response && err.response.data) {
  //         errMsg += err.response.data.message;
  //       }

  //       this.setState({ welcomeMessage: errMsg });
  //     });
  // };

  render() {
    return (
      <>
        <h1>Hello {this.props.match.params.name}!</h1>
        <div>
          You can find your todo items{" "}
          <Link to={`/users/${this.props.match.params.name}/todo`}>here</Link>
        </div>
      </>
    );
  }
}

export default Welcome;
