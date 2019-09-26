import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";
import queryString from 'query-string';

class EditVisa extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", description: "", countriesTitle: "", countriesDescription: "", asiaTitle: "", asiaDescription: "", };
    let params = queryString.parse(this.props.location.search);
    Service.getVisa(params.country).then(response => {
      this.setState({
        id: response.id, description: response.description, countriesTitle: response.countriesTitle,
        countriesDescription: response.countriesDescription, asiaTitle: response.asiaTitle, asiaDescription: response.asiaDescription
      })
    });
  }
  onDescriptionChange = (event) =>{
    this.setState({
      description: event.target.value
    })
  }
  onCountriesTitleChange = (event) =>{
    this.setState({
      countriesTitle: event.target.value
    })
  }
  onCountriesDescriptionChange = (event) =>{
    this.setState({
      countriesDescription: event.target.value
    })
  }
  onAsiaTitleChange = (event) =>{
    this.setState({
      asiaTitle: event.target.value
    })
  }
  onAsiaDescriptionChange = (event) =>{
    this.setState({
      asiaDescription: event.target.value
    })
  }

  onClick = (event) =>
  {
    event.preventDefault();
    Service.updateVisa(this.state);
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
                Редактирование страницы "Виза"
              </h2>
              <form>
              <input
                    type="text"
                    value={this.state.id}
                    hidden
                  />
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Описание страницы
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Первое оглавление</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={this.state.countriesTitle}
                    onChange={this.onCountriesTitleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Описание первого оглавления
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.countriesDescription}
                    onChange={this.onCountriesDescriptionChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Второе оглавление</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={this.state.asiaTitle}
                    onChange={this.onAsiaTitleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Описание второго оглавления
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.asiaDescription}
                    onChange={this.onAsiaDescriptionChange}
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
export default EditVisa;
