import React, { Component } from "react";
import { Service } from "../../services/Services";

class Cruises extends Component {
  constructor(props) {
    super(props);
    this.state = { cruises: [], cruisesPage: "" };
    Service.getCruisesPage().then(response =>
      this.setState({ cruisesPage: response })
    );
    Service.getCruises().then(response =>
      this.setState({ cruises: response })
    );
  }
  render() {
    return (
      <section id="about" className="py-5">
        <div className="container-fluid">
          <section id="gallery">
            <h2 className="mb-5 font-weight-bold text-center">
              Круизы
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
                        src={`/cruises/1.jpg`}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/cruises/2.jpg`}
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/cruises/3.jpg`}
                        alt="Third slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/cruises/4.jpg`}
                        alt="Forth slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={`/cruises/5jpg`}
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
                  <strong>{this.state.cruisesPage.title}</strong>
                </h4>
                <p>{this.state.cruisesPage.description}</p>
              </div>
            </div>
          </section>

          <div className="row mb-3">
            {this.state.cruises.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <article className="card">
                  <div className="card-block">
                    <div className="img-card">
                      <img
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="100%"
                        src={`/cruises/${item.url}/${item.url}.jpg`}
                        alt="west"
                      />
                    </div>
                    <p className="tagline card-text text-xs-center">
                      {item.name}
                    </p>
                    <a href={`/cruises/${item.url}`} className="btn btn-block">
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
export default Cruises;
