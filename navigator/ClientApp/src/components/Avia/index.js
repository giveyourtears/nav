import React from "react";

const Avia = () => {
  const frame = {
    width: "100vw",
    height: "50vw"
  };
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Авиабилеты iati
        </h2>
        <div className="row">
          <iframe
            src="http://awebnavigator.onlineota.com/?Lang=ru"
            scrolling="auto"
            title="aviaIati"
            frameBorder="0"
            style={frame}
            allowTransparency="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Avia;
