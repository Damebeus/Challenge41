import { React, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailClean, getCoin } from "../../redux/actions";

import style from "./DetailsFav.module.css";

const DetailsFav = () => {
  const dispatch = useDispatch();
  const { ticker } = useParams();

  useEffect(() => {
    dispatch(getCoin(ticker));

    return () => {
      dispatch(detailClean());
    };
  }, [dispatch, ticker]);

  const detail = useSelector((state) => state.detailcoin);

  /*  const history = useHistory();
  const goBack = () => {
    history.goBack();
  } */

  return (
    <div>
      <Navbar redireccion={"/añadir"} />
      <div key={detail.ticker}></div>
      <div className={style.titulo}>
        <h2>{detail.coin}</h2>
      </div>
      <div className={style.search}>
        <input type='number' placeholder={`Cantidad de ${detail.coin}...`} />
      </div>

      <div className={style.guardar}>
        <Link to='/home'>
          <button>Guardar en favoritos</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsFav;
