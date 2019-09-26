import React, { Component } from "react";
import Header from "./Header/index";
import Sidebar from "./Sidebar/index";
import Logout from "./LogoutModal/index";
import Delete from "./DeleteModal/index";
import { Service } from "../../services/Services";

class AdminTours extends Component {
  constructor(props) {
    super(props);
    this.state = { tours: [] };
    Service.getTours().then(resp => this.setState({ tours: resp }));
  }

  delete = (id) =>{
    Service.deleteTour(id);
    this.setState({
      tours: this.state.tours.filter(tour => tour.id !== id)
    })
  }

  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />

            <div className="container-fluid">
              <section id="articles" className="text-center py-5">
                <div className="container">
                  <h2 className="h1-responsive font-weight-bold mb-5">Туры</h2>
                  <div className="row">
                    <a
                      className="btn btn-primary col-lg-1 col-md-12 mb-3 ml-3"
                      href="/addTour"
                    >
                      Добавить
                    </a>
                  </div>
                  <div className="row">
                    {this.state.tours.map((item, index) => (
                      <div className="col-lg-3 col-md-12 mb-3" key={index}>
                        <div className="card card-cascade narrower">
                          <div className="view view-cascade">
                            <a href={`/tour/${item.url}`}>
                              <img
                                className="card-img-top"
                                src={`/tour/${item.url}/${item.url}.jpg`}
                                alt="tours"
                              />
                            </a>
                            <div className="mask img-gradient" />
                          </div>
                          <div className="card-body card-body-cascade">
                            <h4 className="font-weight-bold card-title">
                              {item.name}
                            </h4>
                            <a
                              className="btn btn-warning mr-3"
                              href={`/editTour?tour=${item.url}`}
                            >
                              Изменить
                            </a>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={()=>this.delete(item.id)}
                            >
                              Удалить
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Delete />
        <Logout />
      </div>
    );
  }
}
export default AdminTours;
