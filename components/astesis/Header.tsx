"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full z-10 text-white ${
        isScrolled ? "bg-slate-800" : "bg-transparent"
      } px-4 lg:px-16 py-4 flex justify-between items-center`}
    >
      <Link
        href={"/as-tesis"}
        className="cursor-pointer transition duration-100 ease-in-out hover:scale-110"
      >
        <Image
          src={"/images/as-tesis/logo-as-tesis.png"}
          alt="Logo AsTesis"
          width={100}
          height={100}
        ></Image>
      </Link>
      <button
        className="lg:hidden z-50 relative cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-all duration-300 ease-in-out"></X>
        ) : (
          <Menu className="w-6 h-6 transition-all duration-300 ease-in-out"></Menu>
        )}
      </button>
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out lg:relative lg:w-auto lg:bg-transparent lg:transform-none lg:flex lg:items-center ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0`}
      >
        <ul
          className={
            "flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-8 lg:p-0 pt-20 lg:pt-0"
          }
        >
          <li className="underline-animation">
            <Link href={"/"}>Ases</Link>
          </li>
          <li className="underline-animation">
            <a href="#inicio">Inicio</a>
          </li>
          <li className="underline-animation">
            <a href="#servicios">Servicios</a>
          </li>
          <li className="underline-animation">
            <a href="#masterclas">Masterclas</a>
          </li>
          <li className="underline-animation">
            <a href="#investigacion">Investigación</a>
          </li>
          <li className="underline-animation">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
