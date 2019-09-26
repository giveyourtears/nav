import React from "react";
import image from "../../assets/logo.png";
import "./style.scss";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-white navbar-expand-sm">
      <a className="navbar-brand" href="/">
        <img src={image} alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-list-5"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbar-list-5">
        <ul className="navbar-nav ml-auto h5 ">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="_blank"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-globe-europe" /> Туры
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/region/africa">
                Африка
              </a>
              <a className="dropdown-item" href="/region/america">
                Америка
              </a>
              <a className="dropdown-item" href="/region/asia">
                Азия
              </a>
              <a className="dropdown-item" href="/region/europe">
                Европа
              </a>
              <a className="dropdown-item" href="/region/middleeast">
                Ближний восток
              </a>
              <hr />
              <a className="dropdown-item" href="/cruises">
                Круизы
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="_blank"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fab fa-cc-visa" /> Другое
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/insurance">
                Страхование
              </a>
              <a className="dropdown-item" href="/visa">
                Визы
              </a>
              <a className="dropdown-item" href="/transfer">
                Трансфер
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="_blank"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-concierge-bell" /> Отели и авиабилеты
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/HotelBooking">
                Отель Дискаунт
              </a>
              <a className="dropdown-item" href="/avia">
                Авиа iati
              </a>
              <a className="dropdown-item" href="/hotelIati">
                Отели iati
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/hotels">
              <i className="fas fa-hotel" /> Отели
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              <i className="fas fa-info-circle" /> О нас
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
