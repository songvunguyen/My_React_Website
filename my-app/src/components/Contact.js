import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div
        className="container-fluid page"
        style={{textAlign: 'center'}}
        id="contact"
      >
        <div className="center-div">
          <h1 style={{fontSize: '5vw', fontWeight: 'bold'}}>
            How you can reach me
          </h1>
          <div className="row" style={{width: '70vw', marginTop: 50}}>
            <div className="col-md-4">
              <div className="card h-150">
                <div className="card-body">
                  <h1 className="card-title">
                    <i className="bi bi-envelope-at-fill"></i>
                  </h1>
                  <p className="card-text">songvuknguyen@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-150">
                <div className="card-body">
                  <h1 className="card-title">
                    <i className="bi bi-discord"></i>
                  </h1>
                  <p className="card-text">@SVK#4275</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-150">
                <div className="card-body">
                  <h1 className="card-title">
                    <i className="bi bi-geo-alt-fill"></i>
                  </h1>
                  <p className="card-text">Pittsburgh, PA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
