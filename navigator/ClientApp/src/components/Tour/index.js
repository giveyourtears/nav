import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Service } from "../../services/Services";

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = { tour: "", path: "" };
    let str = createBrowserHistory().location.pathname.split("/");
    let path = str[str.length - 1];
    if (path === "") path = str[str.length - 2];
    Service.getTour(path).then(response =>
      this.setState({ tour: response, path: path })
    );
  }
  render() {
    return (
      <section id="about" className="py-5">
        <div className="container-fluid">
          <section id="gallery">
            <h2 className="mb-5 font-weight-bold text-center">
              {this.state.tour.name}
            </h2>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div
                  id="carousel-example-1z"
                  className="carousel slide carousel-fade carousel-fade"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carousel-example-1z"
                      data-slide-to="0"
                      className="active"
                    />
                    <li data-target="#carousel-example-1z" data-slide-to="1" />
                    <li data-target="#carousel-example-1z" data-slide-to="2" />
                    <li data-target="#carousel-example-1z" data-slide-to="3" />
                    <li data-target="#carousel-example-1z" data-slide-to="4" />
                  </ol>
                  <div className="carousel-inner z-depth-1-half" role="listbox">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={`/tour/${this.state.path}/${this.state.path}1.jpg`}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/tour/${this.state.path}/${this.state.path}2.jpg`}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/tour/${this.state.path}/${this.state.path}3.jpg`}
                        alt="Third slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/tour/${this.state.path}/${this.state.path}4.jpg`}
                        alt="Forth slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/tour/${this.state.path}/${this.state.path}5.jpg`}
                        alt="Fifth slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel-example-1z"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel-example-1z"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row mb-3">
                  <div className="col-1">
                    <i className="far fa-hand-point-right" />
                  </div>
                  <div className="col-xl-10 col-md-11 col-10">
                    <h5 className="font-weight-bold mb-3">Цена</h5>
                    <p className="grey-text">{this.state.tour.price}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-1">
                    <i className="far fa-hand-point-right" />
                  </div>
                  <div className="col-xl-10 col-md-11 col-10">
                    <h5 className="font-weight-bold mb-3">Условия</h5>
                    <p className="grey-text">{this.state.tour.conditions}</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-1">
                    <i className="far fa-hand-point-right" />
                  </div>
                  <div className="col-xl-10 col-md-11 col-10">
                    <h5 className="font-weight-bold mb-3">Продолжительность</h5>
                    <p className="grey-text">{this.state.tour.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Tour;
