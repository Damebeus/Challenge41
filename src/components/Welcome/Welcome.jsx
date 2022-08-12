import React from "react";
import { Link } from "react-router-dom";
import style from "./Welcome.module.css";

import cuarenta from "./cuaren.png";
import inferior from "./inferior.png";

const Welcome = () => {
  return (
    <div className={style.global}>
      <div className={style.container}>
        <div className={style.titulo}>
          <h1>Bienvenido</h1>
        </div>
        <div className={style.subtitulo}>
          <h2>Busca tu Cripto Moneda favorita</h2>
        </div>
        <div className={style.boton}>
          <Link to='/home'>
            <button>Ir a la pagina!</button>
          </Link>
        </div>

        <div className={style.imagen}>
          <img src={cuarenta} alt='' />
          <div>
            <p> ®Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
