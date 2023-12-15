import React from "react";
import webImg from "../assets/web-dev.svg";

const CoursesCard = (props) => {
  return (
    <div className=" flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div className=" w-3/5">
        <img src={props.img} alt="img" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-center my-5">
          {props.title}
        </h3>
        <p className="text-lightText text-center md:text-start">
          Kelas ini merupakan kelas yang sangat cocok bagi anak muda yang
          haus akan ilmu pengetahuan dan pembelajaran.
        </p>
      </div>
    </div>
  );
};

export default CoursesCard;
