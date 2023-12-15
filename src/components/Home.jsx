import React from "react";
import img from "../assets/hero.png";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">
          Belajar Bersama
          <span className="text-[#f9ce68]"> Teknik-IT</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
          Teknik-IT merupakan sebuah platform digital yang bergerak dibidang pelatihan 
          kejuruan teknik secara online dan mandiri melalui fitur-fitur yang telah disediakan
        </p>

        <Link to="kontak" spy={true} smooth={true} duration={500}>
          <Button title="Hubungi Kami" />
        </Link>
      </div>

      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
