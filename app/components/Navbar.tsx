"use client";

import React, { useState } from "react";
import { MdSubscriptions } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState();
  return (
    <div className="flex  w-full h-[50px] bg-slate-600 ">
      <div className="w-[20%] h-full bg-blue-500">
        <h1 className="text-center mt-3">FilmFizz</h1>
      </div>
      <div className="w-[80%] h-full ">
        <div className="flex gap-3 justify-end pr-[30px] mt-3">
          <MdSubscriptions className="text-2xl" />
          <input
            type="text"
            placeholder="search movies"
            className="rounded-sm px-3 outline-none"
          />
          <img
            src="images/Avatar.png"
            className="w-[27px] h-[27px] rounded-sm"
          />
          <FaAngleDown className="my-auto" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
