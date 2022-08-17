import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCoin } from "../../redux/actions";
import { AiOutlineSearch } from "react-icons/ai";
import style from "./Searchbar.module.css";
const Searchbar = () => {
  const dispatch = useDispatch();
  const [coin, setCoin] = useState("");

  function handleChange(ev) {
    ev.preventDefault();
    setCoin(ev.target.value);
  }
  function handleSubmit(ev) {
    ev.preventDefault();
    dispatch(searchCoin(coin));
  }

  return (
    <div className={style.container}>
      <input
        type='text'
        placeholder='Buscar crypto...'
        onChange={(ev) => handleChange(ev)}
      />
      <button className={style.boton} onClick={(ev) => handleSubmit(ev)}>
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default Searchbar;
