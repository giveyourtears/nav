import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";
import queryString from 'query-string';

class EditInsurance extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", titleInsurance: "", descriptionInsurance: "" };
    let params = queryString.parse(this.props.location.search);
    Service.getInsurance(params.country).then(response => {
      this.setState({
        id: response.id, titleInsurance: response.titleInsurance, descriptionInsurance: response.descriptionInsurance
      })
    });
  }
  onTitleChange = (event) =>{
    this.setState({
      titleInsurance: event.target.value
    })
  }
  onDescriptionChange = (event) =>{
    this.setState({
      descriptionInsurance: event.target.value
    })
  }

  onClick = (event) =>
  {
    event.preventDefault();
    Service.updateInsurance(this.state);
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
                Редактирование страницы "Страхование"
              </h2>
              <form>
              <input
                    type="text"
                    value={this.state.id}
                    hidden
                  />
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Оглавление</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={this.state.titleInsurance}
                    onChange={this.onTitleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Описание
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.descriptionInsurance}
                    onChange={this.onDescriptionChange}
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
export default EditInsurance;
