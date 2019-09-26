import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Service } from "../../services/Services";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = { tours: [], country: "" };
    let str = createBrowserHistory().location.pathname.split("/");
    let path = str[str.length - 1];
    if (path === "") path = str[str.length - 2];
    Service.getToursByCountry(path).then(response =>
      this.setState({ tours: response, path: path })
    );
    Service.getCountry(path).then(response =>
      this.setState({ country: response })
    );
  }
  render() {
    return (
      <section id="about" className="py-5">
        <div className="container-fluid">
          <section id="gallery">
            <h2 className="mb-5 font-weight-bold text-center">
              {this.state.country.name}
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
                        src={`/country/${this.state.path}/${
                          this.state.path
                        }1.jpg`}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/country/${this.state.path}/${
                          this.state.path
                        }2.jpg`}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/country/${this.state.path}/${
                          this.state.path
                        }3.jpg`}
                        alt="Third slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/country/${this.state.path}/${
                          this.state.path
                        }4.jpg`}
                        alt="Forth slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/country/${this.state.path}/${
                          this.state.path
                        }5.jpg`}
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
              <div className="col-md-6">
                <h4 className="mb-3">
                  <strong>{this.state.country.title}</strong>
                </h4>
                <p>{this.state.country.description}</p>
              </div>
            </div>
          </section>

          <div className="row mb-3">
            {this.state.tours.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <article className="card">
                  <div className="card-block">
                    <div className="img-card">
                      <a href={`/tour/${item.url}`}>
                        <img
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          height="100%"
                          src={`/tour/${item.url}/${item.url}.jpg`}
                          alt="west"
                        />
                      </a>
                    </div>
                    <p className="tagline card-text text-xs-center">
                      {item.name}
                    </p>
                    <a href={`/tour/${item.url}`} className="btn btn-block mb">
                      <i className="fa fa-eye" /> Подробнее
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="previous">
                  Предыдущая
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="first">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="second">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="third">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="next">
                  Следующая
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}
export default Country;
