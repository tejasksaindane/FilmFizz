"use client";

import React, { useState } from "react";
import { MdSubscriptions } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(false);
  };

  return (
    <div className="flex  w-full h-[50px] bg-black relative">
      <div className="w-[20%] h-full ">
        <h1 className="text-center text-white mt-3 ">FilmFizz</h1>
      </div>
      <div className="w-[80%] h-full ">
        <div className="flex gap-3 justify-end pr-[30px] mt-3">
          <MdSubscriptions className="hidden md:block md:text-2xl text-white p-auto hover:-scale-x-110" />
          <IoSearchSharp className="text-2xl text-white md:hidden lg:hidden xl:hidden" />

          <input
            type="text"
            placeholder="search movies"
            className="rounded-sm px-3 outline-none hidden md:flex"
          />
          <img
            src="images/Avatar.png"
            className="w-[27px] h-[27px] rounded-sm"
          />
          <GiHamburgerMenu
            className="my-auto text-2xl text-white md:hidden lg:hidden xl:hidden xxl:hidden "
            onClick={() => setActive(!active)}
          />
          {/* //FIXME:  alternate method */}
          {/* <button onClick={() => setActive(!active)}>
            {
              active ? <RxCross2 />  : <GiHamburgerMenu
              className="my-auto md:hidden lg:hidden xl:hidden xxl:hidden"
              onClick={()=>setActive(!active)}
            />
          }
         </button> */}
        </div>
      </div>

      {/* --------------------Responsive Navbar-----------------------*/}
      {active && (
        <div className="md:hidden absolute top-0 left-0 w-screen h-screen bg-black text-white opacity-[98%]">
          <div className="">
            <button className="w-[100px] h-8 flex flex-col justify-end z-50 float-right mr-4">
              <RxCross2 onClick={() => setActive(false)} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
