import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import style from "./Searchpage.module.css";
const Searchpage = () => {
  return (
    <div>
      <Navbar />
      <div className={style.search}>
        <Searchbar />
      </div>
    </div>
  );
};

export default Searchpage;
