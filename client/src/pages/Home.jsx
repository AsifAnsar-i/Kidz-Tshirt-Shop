import React from "react";
import HeroImg from "../assets/hero1234.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex p-10 mx-auto gap-96">
      <div className="flex-flex-col p-28">
        <h1 className="text-6xl font-semibold font-sans mb-3 text-stone-600">
          Kidz Tshirt Store
        </h1>
        <p className="text-slate-500 text-lg mb-4">
          Welcome to our Kid's Shop a one-stop destination for all things kids!
          Explore a carefully curated collection of adorable clothing, fun toys,
          and more.
        </p>
        <Link to={"/product"}>
          <button className="p-4 bg-stone-600 text-white rounded-2xl w-40 ">
            Shop Now
          </button>
        </Link>
      </div>
      <img src={HeroImg} className="w-96" />
    </div>
  );
};

export default Home;
