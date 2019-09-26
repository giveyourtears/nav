import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";
import { Service } from "../../services/Services";

class CountrySlider extends Component {
  constructor(props) {
    super(props);
    this.state = { countries: [] };
    Service.getCountries().then(resp => this.setState({ countries: resp }));
  }
  render() {
    return (
      <section id="articles" className="text-center py-5">
        <div className="container">
          <h2 className="h1-responsive font-weight-bold mb-5">
            Улетные предложения
          </h2>
          <div className="row">
            {this.state.countries.map((item, index) => (
              <div className="col-lg-3 col-md-12 mb-3" key={index}>
                <div className="card card-cascade narrower">
                  <div className="view view-cascade">
                    <a href={`/country/${item.url}`}>
                      <img
                        className="card-img-top"
                        src={`/country/${item.url}/${item.url}.jpg`}
                        alt="country"
                      />
                    </a>
                    <div className="mask img-gradient" />
                  </div>
                  <div className="card-body card-body-cascade">
                    <h4 className="font-weight-bold card-title">{item.name}</h4>
                    {/* <p className="card-text">{item.description}</p> */}
                    <a className="btn btn-unique" href={`/country/${item.url}`}>
                      Перейти
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default CountrySlider;
