import React, { Component } from "react";
import "./style.css";
import {Service} from '../../services/Services';

class Hotels extends Component{
  constructor(props){
    super(props);
    this.state = {hotels: []};
    Service.getHotels().then((response)=>this.setState({hotels: response}));
  }
  render(){
  return (
    <section id="about" className="py-5">
    {this.state.hotels.map((item, index)=>(
        <div className="container-fluid" key={index}>
        <h2 className="mb-5 font-weight-bold text-center">Отели</h2>
        <div className="row mb-3">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <article className="card">
              <div className="card-block">
                <img
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="100%"
                  src={`/country/${item.url}/${item.url}.jpg`}
                  alt="west"
                />
                <p className="tagline card-text text-xs-center">
                  {item.name}
                </p>
                <a href={`/hotels/${item.url}`} className="btn btn-block">
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
export default Hotels;
