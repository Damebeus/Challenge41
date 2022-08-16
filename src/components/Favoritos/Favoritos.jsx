import React, { useEffect } from "react";
import style from "./Favoritos.module.css";
import { Link } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";
import { deleteFavcoin, getCoin } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Favoritos = ({ ticker, amount, id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoin(ticker));
  }, [ticker]);

  const detail = useSelector((state) => state.coin);

  return (
    <div className={style.monedas}>
      <div className={style.detalles}>
        <div className={style.nombre}>
          <h2>{ticker}</h2>
        </div>
        <div className={style.precio}>
          <h2>$ {amount * detail.prices}</h2>{" "}
          {/* multiplicacion de cripto x dolar */}
        </div>
        <button className={style.quitar}>
          <RiCloseCircleLine />
        </button>
      </div>
    </div>
  );
};

export default Favoritos;
