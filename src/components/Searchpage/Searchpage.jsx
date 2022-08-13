import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import style from "./Searchpage.module.css";
const Searchpage = () => {
  return (
    <div>
      <Navbar redireccion={"/home"} />

      <div className={style.search}>
        <Searchbar />
      </div>
      <div className={style.monedas}>
        <Link to='/favoritos'>
          <div className={style.detalles}>
            <h2>BTC</h2>
          </div>
        </Link>
        <Link to='/favoritos'>
          <div className={style.detalles}>
            <h2>DAI</h2>
          </div>
        </Link>
        <Link to='/favoritos'>
          <div className={style.detalles}>
            <h2>ETH</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Searchpage;
