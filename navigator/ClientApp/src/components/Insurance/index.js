import React, { Component } from "react";
import insurance from "../../assets/insurance.jpg";
import { Service } from "../../services/Services";

class Insurance extends Component {
constructor(props) {
  super(props);
  this.state = { insurance: [] };
  Service.getInsurance().then(resp => this.setState({ insurance: resp }));
}
render() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Страхование
        </h2>
        <div className="row">
          <div className="col-lg-5 text-center text-lg-left">
            <img className="img-fluid" src={insurance} alt="main" />
          </div>
          <div className="col-lg-7">
            <div className="row mb-3">
              <div className="col-1">
                <i className="far fa-hand-point-right" />
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">
                  {this.state.insurance.titleInsurance}
                </h5>
                <p className="grey-text">
                {this.state.insurance.descriptionInsurance}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  };
};

export default Insurance;
