import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-slate-300 drop-shadow-md sticky top-0 z-50 ">
      <div className="flex  justify-between items-center max-w-6xl mx-auto">
        <h1 className="flex flex-wrap p-4 text-3xl font-semibold">
          <span className="text-purple-700">Asif</span>
          <span className="text-blue-700">Shop</span>
        </h1>
        <form className="flex flex-row items-center bg-slate-200 rounded-lg">
          <input
            placeholder="Search..."
            type="text"
            className="p-2 bg-transparent focus:outline-none w-24 md:w-60"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-5">
          <Link to={"/"}>
            <li >Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/sign-in"}>
            <li>Sign in</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
