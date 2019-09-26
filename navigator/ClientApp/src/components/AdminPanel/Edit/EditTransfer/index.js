import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";
import queryString from 'query-string';

class EditTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", description: "", priceMoscow: "", priceTwoMoscow: "", priceKiev: "", priceTwoKiev: "", };
    let params = queryString.parse(this.props.location.search);
    Service.getTransfer(params.country).then(response => {
      this.setState({
        id: response.id, description: response.description, priceMoscow: response.priceMoscow,
        priceTwoMoscow: response.priceTwoMoscow, priceKiev: response.priceKiev, priceTwoKiev: response.priceTwoKiev
      })
    });
  }
  onDescriptionChange = (event) =>{
    this.setState({
      description: event.target.value
    })
  }
  onPriceMoscowChange = (event) =>{
    this.setState({
      priceMoscow: event.target.value
    })
  }
  onPriceTwoMoscowChange = (event) =>{
    this.setState({
      priceTwoMoscow: event.target.value
    })
  }
  onPriceKievChange = (event) =>{
    this.setState({
      priceKiev: event.target.value
    })
  }
  onPriceTwoKievChange = (event) =>{
    this.setState({
      priceTwoKiev: event.target.value
    })
  }

  onClick = (event) =>
  {
    event.preventDefault();
    Service.updateTransfer(this.state);
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
                Редактирование страницы "Трансфер"
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
                  <label htmlFor="exampleFormControlTextarea1">
                    Описание первого оглавления
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.priceMoscow}
                    onChange={this.onPriceMoscowChange}
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
                    value={this.state.priceTwoMoscow}
                    onChange={this.onPriceTwoMoscowChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Описание третьего оглавления
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.priceKiev}
                    onChange={this.onPriceKievChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Описание четвертого оглавления
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.priceTwoKiev}
                    onChange={this.onPriceTwoKievChange}
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
export default EditTransfer;
