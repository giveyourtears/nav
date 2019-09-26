import React from "react";

const Layout = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/regionAdmin"
      >
        <div className="sidebar-brand-text mx-3">Админ</div>
      </a>

      <hr className="sidebar-divider my-0" />
      <div className="sidebar-heading">Направления</div>
      <li className="nav-item active">
        <a className="nav-link" href="/regionAdmin">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Регионы</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/countriesAdmin">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Страны</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/toursAdmin">
          <i className="fas fa-globe-europe" />
          <span>Туры</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/hotelsAdmin">
          <i className="fas fa-hotel" />
          <span>Отели</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/cruisesAdmin">
          <i className="fas fa-water"></i>
          <span>Круизы</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Услуги</div>
      <li className="nav-item active">
        <a className="nav-link" href="/editAbout">
          <i className="far fa-address-card" />
          <span>О нас</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/editVisa">
          <i className="fab fa-cc-visa" />
          <span>Виза</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/editTransfer">
          <i className="fas fa-shuttle-van" />
          <span>Трансфер</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/editInsurance">
          <i className="fas fa-hands-helping" />
          <span>Страхование</span>
        </a>
      </li>
    </ul>
  );
};
export default Layout;
