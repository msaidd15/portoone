import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-[#ffe099]">
        <div>
          <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer">
            Teknik-IT
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
          <Link
            to="beranda"//home
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#ffffff] transition-all cursor-pointer"
          >
            Beranda
          </Link>
          <Link
            to="tentang" //about
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#ffffff] transition-all cursor-pointer"
          >
            Tentang
          </Link>
          <Link
            to="kursus" //courses
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#ffffff] transition-all cursor-pointer"
          >
            Daftar Kursus
          </Link>
          <Link
            to="ulasan" //reviews
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#ffffff] transition-all cursor-pointer"
          >
            Ulasan
          </Link>
          <Link
            to="Kontak" //contact
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#ffffff] transition-all cursor-pointer"
          >
            Kontak
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="beranda" //home
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#ffffff] transition-all cursor-pointer"
        >
          Beranda
        </Link>
        <Link
          to="tentang" //about
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#ffffff] transition-all cursor-pointer"
        >
          Tentang
        </Link>
        <Link
          to="kursus" //courses
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#ffffff] transition-all cursor-pointer"
        >
          Kursus
        </Link>
        <Link
          to="ulasan" //reviews
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#ffffff] transition-all cursor-pointer"
        >
          Ulasan
        </Link>
        <Link
          to="kontak" //contact
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#ffffff] transition-all cursor-pointer"
        >
          Kontak
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
