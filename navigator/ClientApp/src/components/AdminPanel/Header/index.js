import React, { Component } from "react";
import "../style.css";

class Layout extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars" />
        </button>

        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block" />
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              id="userDropdown"
              href="/"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span
                className="mr-2 d-none d-lg-inline text-gray-600 small"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                Выход
              </span>
              <img
                className="img-profile rounded-circle"
                src="https://image.flaticon.com/icons/svg/74/74472.svg"
                alt="exit"
              />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Layout;
