import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import CardCripto from "../CardCripto/CardCripto.jsx";
import { getAllCoins } from "../../redux/actions.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Searchpage.module.css";

const Searchpage = () => {
  const dispatch = useDispatch();
  const allCoins = useSelector((state) => state.coinstoshow);

  useEffect(() => {
    dispatch(getAllCoins());
  }, []);

  return (
    <div>
      <Navbar redireccion={"/home"} />

      <div className={style.search}>
        <Searchbar />
      </div>
      <div className={style.cardContainer}>
        <div className={style.subtitulo}>
          <p>Nombre</p>
          <p>Precio</p>
        </div>
        <div className={style.renderizado}>
          {allCoins.map((coin) => (
            <CardCripto
              key={coin.ticker}
              ticker={coin.ticker}
              coin={coin.coin}
              prices={coin.prices}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
