import React, { Component } from "react";
import image from "../../assets/404.gif";

export default class NotFound extends Component {
  render() {
    return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <img src={image} alt="404"></img>
        </div>
      </div>
    </div>
    )
    };
};
