import React, { Component } from "react";
import { createBrowserHistory } from "history";
import {Service} from '../../services/Services';

class HotelsByCountry extends Component{
    constructor(props) {
        super(props);
        this.state = { hotels: [], path: "", country : "" };
        let str = createBrowserHistory().location.pathname.split("/");
        let path = str[str.length - 1];
        if (path === "") path = str[str.length - 2];
        Service.getHotelsByCountry(path).then(response =>
          this.setState({ hotels: response, path: path })
        );
        Service.getCountry(path).then(response =>
        this.setState({ country: response })
      );
      }
  render(){
  return (
    <section id="about" className="py-5">
    {this.state.hotels.map((item, index)=>(
        <div className="container-fluid" key={index}>
        <h2 className="mb-5 font-weight-bold text-center">{this.state.country.name}</h2>
        <div className="row mb-3">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <article className="card">
              <div className="card-block">
                <img
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="100%"
                  src={`/hotel/${item.url}/${item.url}.jpg`}
                  alt="west"
                />
                <p className="tagline card-text text-xs-center">
                  {item.name}
                </p>
                <a href={`/hotel/${item.url}`} className="btn btn-block">
                  <i className="fa fa-eye" /> Подробнее
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    ))}
  </section>
  );
}
}
export default HotelsByCountry;
