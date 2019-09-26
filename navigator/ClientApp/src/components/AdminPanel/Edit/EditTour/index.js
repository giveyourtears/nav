import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";
import queryString from 'query-string';

class EditTour extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", duration: "", price: "", url: "", conditions: "", countries: [], countryId: "" };
    let params = queryString.parse(this.props.location.search);
    Service.getTour(params.tour).then(response => {
      this.setState({
        id: response.id, countryId: response.countryId, url: response.url, name: response.name, duration: response.duration, price: response.price, conditions: response.conditions 
      })
    });
    Service.getCountriesName().then(response =>
      this.setState({ countries: response })
    );
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
    Service.updateTour(this.state);
  }


  onSelectChange = (event) => {
    this.setState({
      countryId: event.target.value
    })
  }

  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Header />

            <div class="container-fluid">
              <h2 className="h1-responsive font-weight-bold mb-5">
                Редактирование тура
              </h2>
              <form>
              <input
                    type="text"
                    value={this.state.id}
                    hidden
              />
               <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Выбор страны</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={this.state.countryId} onChange={this.onSelectChange}>
                    {this.state.countries.map((item, index) => (
                        <option key={index} value={item.id}>{item.name}</option>
                    ))
                    }
                  </select>
                </div>
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
                <div class="form-group">
                  <label for="exampleInputPassword1">Цена</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Цена"
                    value={this.state.price}
                    onChange={this.onPriceChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Условия</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Условия"
                    value={this.state.conditions}
                    onChange={this.onConditionsChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Продолжительность</label>
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.duration}
                    id="exampleInputPassword1"
                    placeholder="Продолжительность"
                    onChange={this.onDurationChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlFile1">
                    Добавить изображение
                  </label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    multiple accept="image/*"
                  />
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.onClick}>
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
export default EditTour;
