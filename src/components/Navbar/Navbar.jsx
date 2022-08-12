import React from "react";
import style from "./Navbar.module.css";
import { BiArrowBack } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.back}>
        <BiArrowBack />
      </div>
      <div className={style.titulo}>CryptoFav</div>
    </div>
  );
};

export default Navbar;
