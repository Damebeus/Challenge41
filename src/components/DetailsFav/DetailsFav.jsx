import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import style from "./DetailsFav.module.css";
const DetailsFav = () => {
  return (
    <div>
      <Navbar redireccion={"/añadir"} />
      <div className={style.titulo}>
        <h2>Moneda</h2>
      </div>
      <div className={style.search}>
        <input type='number' placeholder='Cantidad de MONEDA...' />
      </div>
      <div className={style.guardar}>
        <Link to='/home'>
          <button>Guardar</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsFav;
