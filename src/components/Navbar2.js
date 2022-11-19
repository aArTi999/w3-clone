import React from "react";
import { RiHome4Fill } from "react-icons/ri";
import { VscColorMode } from "react-icons/vsc";
import { TiWorld } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
const Navbar2 = ({ toggleDarkMode }) => {
  return (
    <div className="min-h-[8vh] w-full bg-slate-800 justify-between items-center fixed top-[15vh] ">
      <div className="flex dark:bg-[#0D1721]">
        <div className="w-4/5 flex">
          <div className="text-white text-2xl w-10 mx-2 flex justify-center items-center h-[8vh] hover:bg-black ">
            <RiHome4Fill />
          </div>
          <div className="text-white font-medium text-md w-4/5">
            <ul className="flex justify-around items-center cursor-pointer">
              <li className="h-[8vh] flex justify-center items-center hover:bg-black active:bg-green-600 p-2">
                HTML
              </li>
              <li className="h-[8vh] flex justify-center items-center hover:bg-black active:bg-green-600 p-2">
                CSS
              </li>
              <li className="h-[8vh] flex justify-center items-center hover:bg-black active:bg-green-600 p-2">
                JAVASCRIPT
              </li>
              <li className="h-[8vh] flex justify-center items-center hover:bg-black active:bg-green-600 p-2">
                SQL
              </li>
              <li className="h-[8vh] flex justify-center items-center hover:bg-black active:bg-green-600 p-2">
                PYTHON
              </li>
              <li className="h-[8vh] flex justify-center items-center hover:bg-black active:bg-green-600 p-2">
                JAVA
              </li>
              <li className="h-[8vh] flex justify-center items-center hover:bg-black active:bg-green-600 p-2">
                PHP
              </li>
              <li className="h-[8vh] flex justify-center items-center hover:bg-black active:bg-green-600 p-2">
                BOOTSTRAP
              </li>
              <li className="h-[8vh] flex justify-center items-center hover:bg-black active:bg-green-600 p-2">
                HOW TO
              </li>
              <li className="h-[8vh] flex justify-center items-center hover:bg-black active:bg-green-600 p-2">
                W3.CSS
              </li>
              <li className="h-[8vh] flex justify-center items-center hover:bg-black active:bg-green-600 p-2">
                C
              </li>
            </ul>
          </div>
        </div>
        <div className="w-60 flex justify-around">
          <div className="w-20 text-white text-2xl font-bold h-[8vh] flex justify-center items-center hover:bg-black">
            <VscColorMode onClick={() => toggleDarkMode()} />
          </div>
          <div className="w-20 text-white text-2xl font-bold h-[8vh] flex justify-center items-center hover:bg-black">
            <TiWorld />
          </div>
          <div className="w-20 text-white text-2xl font-bold h-[8vh] flex justify-center items-center hover:bg-black">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar2;
