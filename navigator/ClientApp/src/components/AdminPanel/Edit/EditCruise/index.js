import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";
import queryString from 'query-string';

class EditCruise extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", duration: "", price: "", url: "", conditions: "" };
    let params = queryString.parse(this.props.location.search);
    Service.getCruise(params.cruise).then(response => {
      this.setState({
        id: response.id, name: response.name, duration: response.duration, price: response.price, conditions: response.conditions 
      })
    });
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  onConditionsChange = (event) => {
    this.setState({
      conditions: event.target.value
    })
  }
  onDurationChange = (event) => {
    this.setState({
      duration: event.target.value
    })
  }
  onPriceChange = (event) =>{
    this.setState({
      price: event.target.value
    })
  }
  onUrlChange = (event) =>{
    this.setState({
      url: event.target.value
    })
  }

  onClick = (event) =>
  {
    event.preventDefault();
    Service.updateCruise(this.state);
  }

  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />

            <div className="container-fluid">
              <h2 className="h1-responsive font-weight-bold mb-5">
                Редактирование круиза
              </h2>
              <form>
              <input
                    type="text"
                    value={this.state.id}
                    hidden
              />
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Название</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Введите название"
                    value={this.state.name}
                    onChange={this.onNameChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Ссылка
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Ссылка"
                    value={this.state.url}
                    onChange={this.onUrlChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Цена</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Цена"
                    value={this.state.price}
                    onChange={this.onPriceChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Условия</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Условия"
                    value={this.state.conditions}
                    onChange={this.onConditionsChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Продолжительность</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.duration}
                    id="exampleInputPassword1"
                    placeholder="Продолжительность"
                    onChange={this.onDurationChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    Добавить изображение
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    multiple accept="image/*"
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onClick}>
                  Изменить
                </button>
              </form>
            </div>
          </div>
        </div>
        <Logout />
      </div>
    );
  }
}
export default EditCruise;
