import { React, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailClean, getCoin, postFavcoin } from "../../redux/actions";
import style from "./DetailsFav.module.css";
import axios from "axios";

const DetailsFav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { ticker } = useParams();

  const [input, setInput] = useState({
    cantidad: "",
  });

  function handleSubmit(ev) {
    ev.preventDefault();

    dispatch(
      postFavcoin({
        ticker: detail.ticker,
        coin: detail.coin,
        amount: parseFloat(ev.target.cantidad.value),
      })
    );
    history.push("/home");
  }
  function handleChange(ev) {
    setInput({
      ...input,
      [ev.target.cantidad]: ev.target.value,
    });
  }

  useEffect(() => {
    dispatch(getCoin(ticker));

    return () => {
      dispatch(detailClean());
    };
  }, [dispatch, ticker]);

  const detail = useSelector((state) => state.detailcoin);

  return detail ? (
    <div>
      <Navbar redireccion={"/añadir"} />
      <div key={detail.ticker}></div>
      <div className={style.titulo}>
        <h2>{detail.coin}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={style.search}>
          <input
            type='number'
            name='cantidad'
            step='0.000000001'
            onChange={(ev) => handleChange(ev)}
            placeholder={`Cantidad de ${detail.coin}...`}
          />
        </div>
        <div className={style.logo}>
          <img src={detail.logo} alt={detail.coin} width='150' height='150' />
        </div>
        <div className={style.guardar}>
          <button type='submit'> Guardar en favoritos</button>
        </div>
      </form>
    </div>
  ) : (
    <div>
      <h2>Cargando...</h2>
    </div>
  );
};

export default DetailsFav;
