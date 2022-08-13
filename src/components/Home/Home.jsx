import React from "react";
import Navbar from "../Navbar/UnarrowNavBar";
import style from "./Home.module.css";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={style.container}>
      <Navbar />

      <div className={style.monedas}>
        <div className={style.subtitulo}>
          <p>Nombre</p>
          <p>Cantidad</p>
        </div>
        <div className={style.detalles}>
          <h2>BTC</h2>
          <div className={style.cantidad}>
            <h3>$20.508</h3>
          </div>
          <RiCloseCircleLine className={style.quitar} />
        </div>
        <div className={style.detalles}>
          <h2>ETH</h2>
          <div className={style.cantidad}>
            <h3>$7.508</h3>
          </div>
          <RiCloseCircleLine className={style.quitar} />
        </div>
        <div className={style.detalles}>
          <h2>DAO</h2>
          <div className={style.cantidad}>
            <h3>$508</h3>
          </div>
          <RiCloseCircleLine className={style.quitar} />
        </div>
      </div>

      <div className={style.agregar}>
        <Link to='/añadir'>
          <h2>
            <MdOutlineAddCircleOutline />
            Añadir a favoritos
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
