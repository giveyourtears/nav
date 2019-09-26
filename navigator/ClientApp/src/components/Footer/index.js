import React from "react";

import "./styles.scss";
import phone from "../../assets/phone-call.png";
const Footer = () => {
  return (
    <footer className="nb-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="footer-info-single">
              <h2 className="title">Туры</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="/europe" title="">
                    <i className="fa fa-angle-double-right" /> Европа
                  </a>
                </li>
                <li>
                  <a href="/australia" title="">
                    <i className="fa fa-angle-double-right" /> Австралия
                  </a>
                </li>
                <li>
                  <a href="/africa" title="">
                    <i className="fa fa-angle-double-right" /> Африка
                  </a>
                </li>
                <li>
                  <a href="/china" title="">
                    <i className="fa fa-angle-double-right" /> Китай
                  </a>
                </li>
                <li>
                  <a href="/east" title="">
                    <i className="fa fa-angle-double-right" /> Ближний восток
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="footer-info-single">
              <h2 className="title">Услуги</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="/visa" title="">
                    <i className="fa fa-angle-double-right" /> Виза
                  </a>
                </li>
                <li>
                  <a href="/insurance" title="">
                    <i className="fa fa-angle-double-right" /> Страхование
                  </a>
                </li>
                <li>
                  <a href="/transfer" title="">
                    <i className="fa fa-angle-double-right" /> Трансфер
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="footer-info-single">
              <h2 className="title">Социальные сети</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="skype:tk-navigator?call">
                    <i className="fab fa-skype" /> Skype
                  </a>
                </li>
                <li>
                  <a href="www.instagram.com/navigator_tour/">
                    <i className="fab fa-instagram" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:info@tk-navigator.by">
                    <i className="fas fa-envelope" /> e-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="footer-info-single">
              <h2 className="title">Контакты</h2>
              <ul className="list-unstyled">
                <p>Московский пр-т, д. 11, к. 1</p>
                <p>
                  <img src={phone} alt="home" />
                  <a href="tel:8 (0212) 63-63-90"> 8 (0212) 63-63-90</a>
                </p>
                <p>
                  <img
                    src="http://tk-navigator.by/sites/all/themes/dekart/images/tel-vel.gif"
                    alt="mts"
                  />
                  <a href="tel:+375 (29) 67-38-177">+375 (29) 67-38-177</a>
                </p>
                <p>
                  <img
                    src="http://tk-navigator.by/sites/all/themes/dekart/images/tel-mts.gif"
                    alt="velcom"
                  />
                  <a href="tel:+375 (33) 39-38-177">+375 (33) 39-38-177</a>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p>Copyright &copy; 2019. Навигатор путешествий.</p>
            </div>
            <div className="col-sm-6" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
