import React from "react";
import style from "./CardCripto.module.css";
import { Link } from "react-router-dom";

const CardCripto = ({ coin, ticker, prices }) => {
  return (
    <div className={style.monedas}>
      <Link to={`/favoritos/${ticker}`}>
        <div className={style.detalles}>
          <div className={style.nombre}>
            <h2>{coin}</h2>
          </div>
          <div className={style.precio}>
            <h2>$ {prices}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardCripto;
