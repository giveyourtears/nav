import React, { Component } from "react";
import Header from "./Header/index";
import Sidebar from "./Sidebar/index";
import Logout from "./LogoutModal/index";
import Delete from "./DeleteModal/index";
import { Service } from "../../services/Services";

class AdminCruises extends Component {
  constructor(props) {
    super(props);
    this.state = { cruises: [] };
    Service.getCruises().then(resp => this.setState({ cruises: resp }));
  }

  delete = (id) =>{
    Service.deleteCruise(id);
    this.setState({
        cruises: this.state.cruises.filter(cruise => cruise.id !== id)
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
                  <h2 className="h1-responsive font-weight-bold mb-5">
                    Круизы
                  </h2>
                  <div className="row">
                    <a
                      className="btn btn-primary col-lg-1 col-md-12 mb-3 ml-3"
                      href="/addCruise"
                    >
                      Добавить
                    </a>
                  </div>
                  <div className="row">
                    {this.state.cruises.map((item, index) => (
                      <div className="col-lg-3 col-md-12 mb-3" key={index}>
                        <div className="card card-cascade narrower">
                          <div className="view view-cascade">
                            <a href={`/country/${item.url}`}>
                              <img
                                className="card-img-top"
                                src={`/country/${item.url}/${item.url}.jpg`}
                                alt="cruise"
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
                              href={`/editCruise?cruise=${item.url}`}
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
        <Logout />
        <Delete />
      </div>
    );
  }
}
export default AdminCruises;
