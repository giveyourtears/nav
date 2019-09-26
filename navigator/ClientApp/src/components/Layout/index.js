import React from "react";
import Slider from "../Slider/index";
import CountrySlider from "../CountrySlider";
import "./style.css";
const Layout = () => {
  return (
    <div className="her">
      <Slider />
      <CountrySlider />
    </div>
  );
};

export default Layout;
