import React from "react";
import style from "./Navbar.module.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.back}>
        <Link to='/home'>
          <button>
            <BiArrowBack />
          </button>
        </Link>
      </div>
      <div className={style.titulo}>CryptoFav</div>
    </div>
  );
};

export default Navbar;
