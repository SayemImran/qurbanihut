'use client';

import { useState } from 'react';
import logo from "@/../public/assets/logo.svg";
import Image from "next/image";
import Navlink from "./Navlink";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full mx-auto px-3 sm:px-6 bg-slate-100 bg-[linear-gradient(160deg,_#ffffff_0%,_#EAF3DE_30%,_#C0DD97_60%,_#27500A_100%)]">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={120} height={80} className="w-32 sm:w-40" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-5">
            <li>
              <Navlink href={"/"}>Home</Navlink>
            </li>
            <li>
              <Navlink href={"/animals"}>All animals</Navlink>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn bg-[#173404] text-white font-semibold rounded-md shadow-none outline-none border-none">Login</button>
          <button className="btn bg-[#173404] text-white font-semibold rounded-md shadow-none outline-none border-none">Register</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden btn btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 py-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Navlink href={"/"} onClick={() => setIsMenuOpen(false)}>Home</Navlink>
            </li>
            <li>
              <Navlink href={"/animals"} onClick={() => setIsMenuOpen(false)}>All animals</Navlink>
            </li>
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <button className="btn bg-[#173404] text-white font-semibold rounded-md w-full">Login</button>
            <button className="btn bg-[#173404] text-white font-semibold rounded-md w-full">Register</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
