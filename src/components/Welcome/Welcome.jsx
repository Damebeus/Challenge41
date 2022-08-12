import React from "react";
import inferior from "./inferior.png";
import { Link } from "react-router-dom";
import style from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={style.global}>
      <div className={style.container}>
        <div className={style.titulo}>
          <h1>Welcome</h1>
        </div>
        <div className={style.subtitulo}>
          <h2>Search your favorite crypto currency</h2>
        </div>

        <div className={style.imagen}>
          {/* <img src={inferior} alt='' /> */}
        </div>
        <div className={style.boton}>
          <Link to='/home'>
            <button>Lets go!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
