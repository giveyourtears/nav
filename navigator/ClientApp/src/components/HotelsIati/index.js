import React from "react";

const HotelsIati = () => {
  const frame = {
    width: "100vw",
    height: "50vw"
  };
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Отели iati
        </h2>
        <div className="row">
          <iframe
            src="http://awebnavigator.onlineota.com/a/hotel?Lang=ru"
            scrolling="auto"
            title="hotels"
            frameBorder="0"
            style={frame}
            allowTransparency="true"
          />
        </div>
      </div>
    </section>
  );
};

export default HotelsIati;
