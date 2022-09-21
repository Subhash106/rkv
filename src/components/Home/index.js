import React from "react";
import AsideLeft from "../AsideLeft/Index";
import AsideRight from "../AsideRight/Index";
import Header from "../Header";
import Main from "../Main/Index";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <AsideLeft />
      <Main />
      <AsideRight />
    </div>
  );
};

export default Home;
