import React from "react";
import img from "../assets/gear.png";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="Tentang Kami" />
        <p className=" text-lightText">
          Kami merupakan sebuah platform yang berfokus untuk mengembangkan dan menebar ilmu pengetahuan
          ke generasi-genarasi penerus negara.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Kontak Kami" />
        </Link>
      </div>
    </div>
  );
};

export default About;
