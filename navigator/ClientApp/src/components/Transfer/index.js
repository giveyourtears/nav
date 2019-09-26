import React, { Component } from "react";
import transfer from "../../assets/transfer.jpg";
import { Service } from "../../services/Services";

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = { transfer: [] };
    Service.getTransfer().then(resp => this.setState({ transfer: resp }));
  }
  render() {
    return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Трансфер
        </h2>
        <p className="lead grey-text text-center w-responsive mx-auto mb-5">
          {this.state.transfer.description}
        </p>
        <div className="row">
          <div className="col-lg-5 text-center text-lg-left">
            <img className="img-fluid" src={transfer} alt="main" />
          </div>
          <div className="col-lg-7">
            <div className="row mb-3">
              <div className="col-1">
                <i className="far fa-hand-point-right" />
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">
                  Стоимость услуги трансфера в аэропорты Москвы:
                </h5>
                <p className="grey-text">
                  {this.state.transfer.priceMoscow}
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <i className="far fa-hand-point-right" />
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">
                  Стоимость проезда для детей до 12 лет:
                </h5>
                <p className="grey-text">
                {this.state.transfer.priceTwoMoscow}
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <i className="far fa-hand-point-right" />
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">
                  Стоимость услуги трансфера в аэропорты Киева:
                </h5>
                <p className="grey-text">
                {this.state.transfer.priceKiev}
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1">
                <i className="far fa-hand-point-right" />
              </div>
              <div className="col-xl-10 col-md-11 col-10">
                <h5 className="font-weight-bold mb-3">
                  Стоимость проезда для детей до 12 лет:
                </h5>
                <p className="grey-text">
                {this.state.transfer.priceTwoKiev}
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

export default Transfer;
