import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import { getAllCoins } from "../../redux/actions.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Searchpage.module.css";

const Searchpage = () => {
  const dispatch = useDispatch();
  const allCoins = useSelector((state) => state.coins);

  useEffect(() => {
    dispatch(getAllCoins());
  }, []);

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
            <div className={style.nombre}>
              {allCoins && allCoins.map((elm) => <h2>{elm.coin}</h2>)}
            </div>
            <div className={style.precio}>
              {allCoins && allCoins.map((elm) => <h2>$ {elm.prices}</h2>)}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Searchpage;
