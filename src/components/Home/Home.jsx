import React, { useEffect } from "react";
import Navbar from "../Navbar/UnarrowNavBar";
import style from "./Home.module.css";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Favoritos from "../Favoritos/Favoritos";
import { useDispatch, useSelector } from "react-redux";
import { getFavcoin } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavcoin());
  }, [dispatch]);

  const monedasFavoritas = useSelector((state) => state.favoritos);

  return (
    <div className={style.container}>
      <Navbar />

      <div className={style.monedas}>
        <div className={style.subtitulo}>
          <p>Nombre</p>
          <p>Cantidad</p>
        </div>
      </div>
      <div className={style.favorito}>
        {monedasFavoritas.map((coin) => (
          <Favoritos ticker={coin.ticker} amount={coin.amount} id={coin.id} />
        ))}
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
