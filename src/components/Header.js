import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const dropdownRef = useRef(null),
    navRef = useRef(null),
    collapse = () => navRef.current.classList.toggle("hidden"),
    collapseDropdown = () => dropdownRef.current.classList.toggle("hidden");

  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-sm p-4 text-white p-2 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <Link href="/">
          <div className="inline-block flex-shrink-0 font-bold text-xl">
            De lo imposible a lo imparable
          </div>
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={collapse}
            className="px-3 py-2 border rounded border-white-400"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
        </div>
        <nav
          ref={navRef}
          className="w-full block flex-grow-0 lg:flex lg:items-center lg:w-auto justify-end hidden"
        >
          <ul className="lg:flex-grow">
            <li className="lg:inline-block">
              <Link href="/">
                <span className="block lg:inline lg:mt-0 m-3 px-4 py-2 hover:bg-gray-700 rounded-md">
                  Home
                </span>
              </Link>
              <Link href="/descarga">
                <span className="block lg:inline lg:mt-0 m-3 px-4 py-2 hover:bg-gray-700 rounded-md">
                  Descargas
                </span>
              </Link>
              <Link href="/sobre">
                <span className="block lg:inline lg:mt-0 m-3 px-4 py-2 hover:bg-gray-700 rounded-md">
                  Sobre
                </span>
              </Link>
              <Link href="/contacto">
                <span className="block lg:inline lg:mt-0 m-3 px-4 py-2 hover:bg-gray-700 rounded-md">
                  Contacto
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
