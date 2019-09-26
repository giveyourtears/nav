import React from "react";

const HotelBooking = () => {
  const frame = {
    width: "100vw",
    height: "50vw"
  };
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Отель Дискаунт
        </h2>
        <div className="row">
          <iframe
            src="http://navigator.hoteldiscount.ru"
            className="frames"
            title="booking"
            frameBorder="0"
            scrolling="Auto"
            style={frame}
          />
        </div>
      </div>
    </section>
  );
};

export default HotelBooking;
