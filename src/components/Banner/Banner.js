import React, { Component } from "react";
import "./Banner.css";
import Downloadbutton from "../Downloadbutton/Downloadbutton";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-logo" />
        <div className="banner-text">
          <h3>What is Proptech?</h3>
          <p>Download our infoghraphic and find out.</p>
        </div>
        <div className="banner-download-button">
          <Downloadbutton />
        </div>
      </div>
    );
  }
}

export default Banner;
