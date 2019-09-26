import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";

class AddCountry extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", title: "", description: "", url: "", isHot: false, regionId: "", rating: 0, regions: [] };
    Service.getRegionsName().then(response =>
      this.setState({ regions: response,
        regionId: response[0].id
      })
    );
  }

  onNameChange = (event) => {
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
  onUrlChange = (event) =>{
    this.setState({
      url: event.target.value
    })
  }

  onCheckChange = (event) => {
    this.setState({
      isHot: !this.state.isHot
    })
  }

  onRatingChange = (event) => {
    this.setState({
      rating: event.target.value
    })
  }

  onClick = (event) =>
  {
    event.preventDefault();
    Service.addCountry(this.state);
  }

  onSelectChange = (event) => {
    this.setState({
      regionId: event.target.value
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
                Добавление страны
              </h2>
              <form>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Выбор региона </label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={this.onSelectChange}>
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
                    onChange={this.onUrlChange}
                  />
                </div>

                <div className="form-check mb-2">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.onCheckChange}/>
                  <label 
                  className="form-check-label" 
                  htmlFor="exampleCheck1"
                  >
                    Горячая страна?
                    </label>
                </div>
                
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Описание региона
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={this.onDescriptionChange}
                  />
                </div>

                <div className="form-group mb-2">
                  <label 
                  className="form-check-label" 
                  htmlFor="exampleRating1"
                  >
                    Рейтинг
                    </label>
                  <input type="number" className="form-control" id="exampleRating1" onChange={this.onRatingChange}/>
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
export default AddCountry;
