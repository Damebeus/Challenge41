import React from "react";
import Navbar from "../Navbar/Navbar";

import style from "./DetailsFav.module.css";
const DetailsFav = () => {
  return (
    <div>
      <Navbar redireccion={"/añadir"} />
      <div className={style.search}>
        <input type='text' placeholder='Cantidad de...' />
      </div>
    </div>
  );
};

export default DetailsFav;
