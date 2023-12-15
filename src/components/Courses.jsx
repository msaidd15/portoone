import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/arct.png";
import appImg from "../assets/otomasi.png";
import graphicImg from "../assets/3d.png";
import digitalImg from "../assets/k3.png";

const Courses = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Daftar Kursus" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <CoursesCard img={webImg} title="Kursus Autocad" />
        <CoursesCard img={appImg} title="Otomasi Industri" />
        <CoursesCard img={graphicImg} title="Desain 3D" />
        <CoursesCard img={digitalImg} title="Kesehatan Keselamatan Kerja" />
      </div>
    </div>
  );
};

export default Courses;
