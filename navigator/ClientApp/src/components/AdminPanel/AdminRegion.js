import React, { Component } from "react";
import Header from "./Header/index";
import Sidebar from "./Sidebar/index";
import Logout from "./LogoutModal/index";
import Delete from "./DeleteModal/index";
import { Service } from "../../services/Services";

class AdminRegion extends Component {
  constructor(props) {
    super(props);
    this.state = { regions: [] };
    Service.getRegions().then(resp => this.setState({ regions: resp }));
  }

  delete = (id) =>{
    Service.deleteRegion(id);
    this.setState({
      regions: this.state.regions.filter(region => region.id !== id)
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
                    Регион
                  </h2>
                  <div className="row">
                    <a
                      className="btn btn-primary col-lg-1 col-md-12 mb-3 ml-3"
                      href="/addRegion"
                    >
                      Добавить
                    </a>
                  </div>
                  <div className="row">
                    {this.state.regions.map((item, index) => (
                      <div className="col-lg-3 col-md-12 mb-3" key={index}>
                        <div className="card card-cascade narrower">
                          <div className="view view-cascade">
                            <a href={`/region/${item.url}`}>
                              <img
                                className="card-img-top"
                                src={`/region/${item.url}/${item.url}0.jpg`}
                                alt="region"
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
                              href={`/editRegion?region=${item.url}`}
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
export default AdminRegion;
