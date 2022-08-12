import React from "react";
import Navbar from "../Navbar/UnarrowNavBar";
import style from "./Home.module.css";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.agregar}>
        <Link to='/añadir'>
          <button>
            <MdOutlineAddCircleOutline />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
