import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import first from "../../assets/sliders/1.jpg";
import second from "../../assets/sliders/2.jpg";
import third from "../../assets/sliders/3.jpg";
import forth from "../../assets/sliders/4.jpg";
import fifth from "../../assets/sliders/5.jpg";
import six from "../../assets/sliders/6.jpg";
import seven from "../../assets/sliders/7.jpg";

const Slider = () => {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active" />
        <li data-target="#demo" data-slide-to="1" />
        <li data-target="#demo" data-slide-to="2" />
        <li data-target="#demo" data-slide-to="3" />
        <li data-target="#demo" data-slide-to="4" />
        <li data-target="#demo" data-slide-to="5" />
        <li data-target="#demo" data-slide-to="6" />
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={first} alt="plane" />
          <div className="carousel-caption">
            <h3>Ничто так не развивает ум, как путешествие</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={second} alt="item" />
          <div className="carousel-caption">
            <h3>Инвестиции в поездки это инвестиции в себя</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={third} alt="view" />
          <div className="carousel-caption">
            <h3>
              Путешествия лишают тебя дара речи, а потом превращают в лучшего
              рассказчика
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={forth} alt="view" />
          <div className="carousel-caption">
            <h3>
              Как же я люблю чувствовать себя безликим в городе, где я раньше
              никогда не был
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={fifth} alt="view" />
          <div className="carousel-caption">
            <h3>
              Никогда не бойтесь уехать прочь от морей, границ, стран и мыслей
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={six} alt="view" />
          <div className="carousel-caption">
            <h3>
              У настоящего путешественника нет определенного плана и намерения
              куда-либо приехать
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={seven} alt="view" />
          <div className="carousel-caption">
            <h3>Цель – не место, а способность смотреть на мир по-другому</h3>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon" />
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  );
};
export default Slider;
