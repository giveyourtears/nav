import React from "react";
import "../style.css";

const Layout = () => {
  return (
    <div
      className="modal fade"
      id="logoutModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Вы уверены?
            </h5>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Пока пока</div>
          <div className="modal-footer">
            <a className="btn btn-primary" href='/' onClick={() => localStorage.removeItem("isLogin")}>
              Выйти
            </a>
            <button
              className="btn btn-secondary"
              type="button"
              data-dismiss="modal"
            >
              Отменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
