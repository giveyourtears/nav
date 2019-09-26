import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";
import queryString from 'query-string';

class EditHotel extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", description: "", url: "", countries: [], countryId: "" };
    let params = queryString.parse(this.props.location.search)
    Service.getHotel(params.hotel).then(response => {
      this.setState({
        id: response.id, name: response.name, description: response.description, url: response.url, countryId: response.countryId 
      })
    });
    Service.getCountriesName().then(response =>
      this.setState({ countries: response,
        countryId: response[0].id
      })
    );
  }

  onNameChange = (event) =>{
    this.setState({
      name: event.target.value
    })
  }
  onDescriptionChange = (event) =>{
    this.setState({
      description: event.target.value
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
    Service.updateHotel(this.state);
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
                Редактирование отеля
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
                <div class="form-group">
                  <label for="exampleInputEmail1">Название</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Введите название"
                    value={this.state.name}
                    onChange={this.onNameChange}
                  />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Ссылка
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Ссылка"
                    value={this.state.url}
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
                    value={this.state.description}
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
export default EditHotel;
