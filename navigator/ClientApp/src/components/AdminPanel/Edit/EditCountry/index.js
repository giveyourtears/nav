import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";
import queryString from 'query-string';

class EditCountry extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", title: "", description: "", url: "", isHot: true, rating: 0, regions: [], regionId: "" };
    let params = queryString.parse(this.props.location.search);
    Service.getCountry(params.country).then(response => {
      this.setState({
        id: response.id, name: response.name, title: response.title, rating: response. rating,
        description: response.description, url: response.url, isHot: response.isHot, regionId: response.regionId
      })
    });
    Service.getRegionsName().then(response =>
      this.setState({ regions: response })
    );
  }

  onNameChange = (event) =>{
    this.setState({
      name: event.target.value
    })
  }
  onTitleChange = (event) =>{
    this.setState({
      title: event.target.value
    })
  }
  onDescriptionChange = (event) =>{
    this.setState({
      description: event.target.value
    })
  }

  onCheckChange = (event) => {
    this.setState({
      isHot: !this.state.isHot
    })
  }

  onRatingChange = (event) => {
    this.setState({
      rating: +event.target.value
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
    Service.updateCountry(this.state);
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
                Редактирование страны
              </h2>
              <form>
              <input
                    readOnly
                    type="text"
                    value={this.state.id}
                    hidden
                  />
                  <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Выбор региона </label>
                    <select className="form-control" id="exampleFormControlSelect1" value={this.state.regionId} onChange={this.onSelectChange}>
                    {this.state.regions.map((item, index) => (
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
                  <label htmlFor="exampleInputPassword1">Оглавление</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Оглавление"
                    value={this.state.title}
                    onChange={this.onTitleChange}
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

                <div className="form-check mb-2">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.onCheckChange}
                    checked={this.state.isHot}/>
                  <label 
                  className="form-check-label" 
                  htmlFor="exampleCheck1"
                  >
                    Горячая страна?
                    </label>
                </div>
                

                <div className="form-group">
                  <label 
                  className="form-check-label" 
                  htmlFor="exampleRating1"
                  >
                    Рейтинг
                    </label>
                  <input type="number" className="form-control" id="exampleRating1" value={this.state.rating} onChange={this.onRatingChange}/>
                </div>
                
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Описание региона
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
                  <label htmlFor="exampleFormControlFile1">
                    Добавить изображение
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    multiple
                    accept="image/*"
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
export default EditCountry;
