import React from "react";
import { MdArrowDropDown } from "react-icons/md";
const Navbar1 = () => {
  return (
    <div className="min-h-[15vh] w-full shadow-sm fixed top-0 bg-white">
      <div className="flex justify-between dark:bg-[#15202B] dark:text-slate-200">
        <div className="flex w-1/2 cursor-pointer">
          <div className="flex flex-col w-32 h-auto justify-center items-center">
            <span className="text-5xl text-green-400 font-bold">W</span>
            <span className="text-lg text-green-400 font-medium">schools</span>
          </div>
          <div className="w-3/4 flex justify-center items-center">
            <ul className="w-full  flex justify-around items-center cursor-pointer">
              <li className="w-1/4 h-[15vh] flex justify-center items-center text-md font-semibold tracking-wide   hover:bg-green-400 hover:text-white active:bg-black">
                Tutorials
                <MdArrowDropDown className="text-2xl" />
              </li>
              <li className="w-1/4 h-[15vh] flex justify-center items-center text-md font-semibold tracking-wide hover:bg-green-400 hover:text-white active:bg-black">
                References
                <MdArrowDropDown className="text-2xl" />
              </li>
              <li className="w-1/4 h-[15vh] flex justify-center items-center text-md font-semibold tracking-wide  hover:bg-green-400 hover:text-white active:bg-black">
                Exercises
                <MdArrowDropDown className="text-2xl" />
              </li>
              <li className="w-1/4 h-[15vh] flex justify-center items-center text-md font-semibold tracking-wide hover:bg-green-400 hover:text-white active:bg-black">
                Videos
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 flex justify-around items-center cursor-pointer">
          <div>
            <button className="px-6 py-3 bg-black  rounded-full font-bold tracking-wide dark:bg-slate-200 dark:text-slate-900 text-white hover:bg-slate-700 dark:hover:text-white dark:hover:bg-slate-400">
              Upgrade
            </button>
          </div>
          <div>
            <button className="px-6 py-3 bg-pink-300 rounded-full font-bold tracking-wide dark:text-slate-900 hover:bg-pink-200">
              Get Certified
            </button>
          </div>
          <div>
            <button className="px-6 py-3 bg-lime-200 rounded-full font-bold tracking-wide dark:text-slate-900 hover:bg-lime-100">
              Free Website
            </button>
          </div>
          <div>
            <button className="px-6 py-3 bg-green-500 rounded-full font-bold tracking-wide text-white hover:bg-green-400">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar1;
