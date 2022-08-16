import React, { useEffect } from "react";
import style from "./Favoritos.module.css";
import { Link } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";
import { deleteFavcoin, deleteState, getCoin } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Favoritos = ({ ticker, amount, id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoin(ticker));
  }, [ticker]);

  const detail = useSelector((state) => state.detailcoin);
  function handleDelete() {
    dispatch(deleteFavcoin(id));
    dispatch(deleteState(id));
  }

  return (
    <div className={style.monedas}>
      <div className={style.detalles}>
        <div className={style.nombre}>
          <h2>{ticker}</h2>
        </div>
        <div className={style.cantidad}>
          {/*  <h2>$ {amount * detail.prices}</h2> */} <h2>{amount}</h2>
          {/*       <h3>{detail.prices}</h3> */}
          {/* multiplicacion de cripto x dolar */}
        </div>
        <button onClick={handleDelete} className={style.quitar}>
          <RiCloseCircleLine />
        </button>
      </div>
    </div>
  );
};

export default Favoritos;
