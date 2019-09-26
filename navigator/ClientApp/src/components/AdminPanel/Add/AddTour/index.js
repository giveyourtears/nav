import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";

class AddTour extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", duration: "", price: "", url: "", countryId: "", conditions: "", countries: [] };
    Service.getCountriesName().then(response =>
      this.setState({ countries: response,
        countryId: response[0].id
      })
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
  onIdCountryChange = (event) => {
    this.setState({
      countryId: event.target.value
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

  onSelectChange = (event) => {
    this.setState({
      countryId: event.target.value
    })
  }

  onClick = (event) =>
  {
    event.preventDefault();
    Service.addTour(this.state);
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
                Добавление тура
              </h2>
              <form>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Выбор страны</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={this.onSelectChange}>
                    {this.state.countries.map((item, index) => (
                        <option key={index} value={item.id}>{item.name}</option>
                    ))
                    }
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={this.state.countryId}
                    aria-describedby="emailHelp"
                    onChange={this.onIdCountryChange}
                    hidden
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Название</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Введите название"
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
                    onChange={this.onConditionsChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Продолжительность</label>
                  <input
                    type="text"
                    class="form-control"
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
                <button type="submit" class="btn btn-primary" href="/toursAdmin" onClick={this.onClick}>
                  Добавить
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
export default AddTour;
