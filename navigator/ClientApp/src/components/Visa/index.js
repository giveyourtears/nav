import React, { Component } from "react";
import passport from "../../assets/passport.jpg";
import { Service } from "../../services/Services";

class Visa extends Component {
  constructor(props) {
    super(props);
    this.state = { visa: [] };
    Service.getVisa().then(resp => this.setState({ visa: resp }));
  }
  render() {
    return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Виза
        </h2>
        <p className="lead grey-text text-center w-responsive mx-auto mb-5">
          {this.state.visa.description}
        </p>
        <div className="row">
          <div className="col-lg-5 text-center text-lg-left">
            <img className="img-fluid" src={passport} alt="main" />
          </div>
          <div className="col-lg-7">
            <div className="row mb-3">
              <div className="col-1">
                <i className="far fa-hand-point-right" />
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">
                  {this.state.visa.countriesTitle}
                </h5>
                <p className="grey-text">
                  {this.state.visa.countriesDescription}
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <i className="far fa-hand-point-right" />
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">{this.state.visa.asiaTitle}</h5>
                <p className="grey-text">
                {this.state.visa.asiaDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }
}
export default Visa;
