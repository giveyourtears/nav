import React, { Component } from "react";
import globus from "../../assets/globus.jpg";
import { Service } from "../../services/Services";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { about: [] };
    Service.getAbout().then(resp => this.setState({ about: resp }));
  }
  render() {
    return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Кто мы?
        </h2>
        <p className="lead grey-text text-center w-responsive mx-auto mb-5">
          {this.state.about.description}
        </p>
        <div className="row">
          <div className="col-lg-5 text-center text-lg-left">
            <img className="img-fluid" src={globus} alt="main" />
          </div>
          <div className="col-lg-7">
            <div className="row mb-3">
              <div className="col-1">
                <i className="far fa-hand-point-right" />
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">{this.state.about.whyTitle}</h5>
                <p className="grey-text">
                {this.state.about.whyDescription}
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
export default About;

