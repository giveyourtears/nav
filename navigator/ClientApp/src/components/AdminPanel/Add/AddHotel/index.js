import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";

class AddHotel extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "", url: "", countryId: "", countries: [] };
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

  onDescriptionChange = (event) =>{
    this.setState({
      description: event.target.value
    })
  }
  onSelectChange = (event) => {
    this.setState({
      countryId: event.target.value
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
    Service.addHotel(this.state);
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
                Добавление отеля
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
                <div class="form-group">
                  <label for="exampleInputEmail1">Название</label>
                  <input
                    type="text"
                    class="form-control"
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
                  <label for="exampleFormControlTextarea1">
                    Описание отеля
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={this.onDescriptionChange}
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
export default AddHotel;
