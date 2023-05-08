import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid page" id="home">
        <div className="center-div">
          <p style={{fontSize: '3vw'}}>Hi, my name is</p>
          <h1 style={{fontSize: '10vw'}}>Song Vu Nguyen</h1>
          <p style={{fontSize: '3vw'}}>
            I am a entry-level software engineer, web and game developer
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
