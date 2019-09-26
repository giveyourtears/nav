import React, { Component } from "react";
import Header from "../../Header/index";
import Sidebar from "../../Sidebar/index";
import Logout from "../../LogoutModal/index";
import { Service } from "../../../../services/Services";
import queryString from 'query-string';

class EditRegion extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", title: "", description: "", url: "", files: [] };
    let params = queryString.parse(this.props.location.search)
    Service.getRegion(params.region).then(response => {
      this.setState({
        id: response.id, name: response.name, title: response.title, description: response.description, url: response.url 
      })
    });
  }


  onImagesChange = (event) =>{
    this.setState({
      files: event.target.files
    })
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
  onUrlChange = (event) =>{
    this.setState({
      url: event.target.value
    })
  }

  onClick = (e) =>
  {
    e.preventDefault();
    let form = new FormData();
    for (var index = 0; index < this.state.files.length; index++) {
        var element = this.state.files[index];
        form.append('file', element);
    }
    form.append('region', JSON.stringify(this.state));
    Service.updateRegion(form);
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
                Добавление региона
              </h2>
              <form>
              <input
                    type="text"
                    value={this.state.id}
                    hidden
                  />
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
                  <label for="exampleInputPassword1">Оглавление</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Оглавление"
                    value={this.state.title}
                    onChange={this.onTitleChange}
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
                    Описание региона
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
                    onChange={this.onImagesChange}
                  />
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.onClick}>
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
export default EditRegion;