import React, { Component } from "react";
import "./style.css";
import image from "./img.jpg";
import { Service } from "../../services/Services";
import { Redirect } from 'react-router-dom'

const style = {
  backgroundImage: `url(${image})`
};

class Login extends Component {
  constructor(props) {
    super(props);
    var redirect = false;
    if(localStorage.getItem("isLogin") === "N|z5GuOWUZsU48z}83I?5s0nOO8ENvdrR20{GmYj") redirect = true;
    this.state = { login: "", password: "", redirect: redirect };
  }

  onLoginChange = (event) => {
    this.setState({
      login: event.target.value,
    })
  }

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  onClick = (event) => {
    event.preventDefault();
    Service.Login(this.state.login, this.state.password).then(response =>
      {
        if(response) 
        {
          localStorage.setItem("isLogin", "N|z5GuOWUZsU48z}83I?5s0nOO8ENvdrR20{GmYj");
          window.location.href = "/regionAdmin";
        }
      }
    );
  }
  render() {
    if (this.state.redirect) {
    return <Redirect to='/regionAdmin' />
  }
    return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-43">Авторизация</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                onChange={this.onLoginChange}
                value={this.state.login}
                name="email"
                placeholder="Email"
              />
            </div>

            <div
              className="wrap-input100 validate-input mb-4"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                onChange={this.onPasswordChange}
                value={this.state.password}
                name="pass"
                placeholder="Пароль"
              />
              <span className="focus-input100" />
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" onClick={this.onClick}>Войти</button>
            </div>
          </form>
          <div className="login100-more" style={style} />
        </div>
      </div>
    </div>
    )
    };
};

export default Login;
