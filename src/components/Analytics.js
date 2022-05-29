import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#37b47a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold capitalize md:text-4xl sm:text-3xl text-2xl py-2">
            Lorem ipsum dolor sit.
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            facere eius quas quaerat voluptate! Minima, nisi fugit sunt
            explicabo voluptatum tempore nesciunt ab fuga, dolor cum unde
            tempora vero nostrum.
          </p>
          <button className="bg-[#37b47a] w-[200px] font-bold rounded-md my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
