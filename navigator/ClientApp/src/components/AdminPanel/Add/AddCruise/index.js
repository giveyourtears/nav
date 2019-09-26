import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";

class AddCruise extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", duration: "", price: "", url: "", countryId: "", conditions: "", country: [] };
    Service.getCountries().then(response =>
      this.setState({ country: response })
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
  onClick = (event) =>
  {
    event.preventDefault();
    Service.addCruise(this.state);
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
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
              <h2 className="h1-responsive font-weight-bold mb-5">
                Добавление круиза
              </h2>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={this.state.countryId}
                    aria-describedby="emailHelp"
                    onChange={this.onIdCountryChange}
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
export default AddCruise;
