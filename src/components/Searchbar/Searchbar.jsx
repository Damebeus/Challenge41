import React from "react";
import style from "./Searchbar.module.css";
const Searchbar = () => {
  return (
    <div className={style.container}>
      <input type='text' placeholder='Search crypto...' />
    </div>
  );
};

export default Searchbar;
