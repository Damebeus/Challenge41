import React from "react";
import Navbar from "../Navbar/UnarrowNavBar";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.container}>
      <Navbar />
    </div>
  );
};

export default Home;
