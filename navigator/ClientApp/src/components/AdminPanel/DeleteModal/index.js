import React from "react";

const Layout = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Удалить?
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Вы действительно хотите удалить? Обратно уже не вернуться!
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" >
              Удалить
            </button>
            <button
              type="button"
              className="btn btn-secondary"
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
