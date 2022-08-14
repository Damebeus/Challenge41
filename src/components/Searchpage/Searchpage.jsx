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
        <div className={style.subtitulo}>
          <p>Nombre</p>
          <p>Precio</p>
        </div>
        <Link to='/favoritos'>
          <div className={style.detalles}>
            <h2>BTC</h2>
            <div className={style.precio}>
              <h3>$24,537</h3>
            </div>
          </div>
        </Link>
        <Link to='/favoritos'>
          <div className={style.detalles}>
            <h2>DAI</h2>
            <div className={style.precio}>
              <h3>$327.7</h3>
            </div>
          </div>
        </Link>
        <Link to='/favoritos'>
          <div className={style.detalles}>
            <h2>ETH</h2>
            <div className={style.precio}>
              <h3>$2,402 </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Searchpage;
