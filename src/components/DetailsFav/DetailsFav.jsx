import React from "react";
import Navbar from "../Navbar/Navbar";

import style from "./DetailsFav.module.css";
const DetailsFav = () => {
  return (
    <div>
      <Navbar redireccion={"/añadir"} />
      <div className={style.titulo}>
        <h2>Moneda</h2>
      </div>
      <div className={style.search}>
        <input type='text' placeholder='Cantidad de MONEDA...' />
      </div>
      <div className={style.guardar}>
        <button>Guardar</button>
      </div>
    </div>
  );
};

export default DetailsFav;
