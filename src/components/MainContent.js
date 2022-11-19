import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const MainContent = () => {
  return (
    <div className=" my-[23vh] w-3/4 max-h-[77vh] bg-white overflow-y-scroll ">
      <div className="dark:bg-slate-800 pt-[0.5vh] pb-[10vh]">
        <h1 className="dark:text-slate-200 my-10 pt-8 mx-5 text-5xl tracking-wide">
          JavaScript Tutorial
        </h1>
        <div className="flex justify-between px-5 ">
          <div>
            <button className="px-4 py-3 bg-green-600 hover:bg-green-700 tracking-wide text-white font-medium rounded-md flex justify-center items-center">
              <MdArrowBackIosNew className="text-md text-white" />
              Home
            </button>
          </div>
          <div>
            <button className="px-5 py-3 bg-green-600 hover:bg-green-700 tracking-wide text-white font-medium rounded-md flex justify-center items-center">
              Next
              <MdArrowForwardIos className="text-md text-white" />
            </button>
          </div>
        </div>
        <div className="w-full bg-green-100 my-8 p-8 dark:text-slate-200 dark:bg-[#193D3D]">
          <ul className="flex flex-col gap-5">
            <li>
              JavaScript is the world's most popular programming language.
            </li>
            <li>
              JavaScript is the world's most popular programming language.
            </li>
            <li>
              JavaScript is the world's most popular programming language.
            </li>
            <li>
              JavaScript is the world's most popular programming language.
            </li>
          </ul>
          <div className="my-5">
            <button className="px-6 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold tracking-wide">
              Start Learning JavaScript Now...
            </button>
          </div>
        </div>
        <div className="my-5 dark:text-slate-200 ">
          <h2 className="text-4xl  tracking-wide mx-3">
            Examples In New Chapter
          </h2>
          <p className="mx-3 my-4 text-lg tracking-wide">
            With our "Try it Yourself" editor, you can edit the source code and
            view the result.
          </p>
          <div className="m-5 dark:bg-[#38444D] bg-slate-200 p-6  rounded-md ">
            <h4 className="text-2xl">Example</h4>
            <div className="bg-white m-4 p-5 rounded-md dark:bg-slate-800">
              <h2 className="text-3xl">My First JavaScript</h2>
              <button className="my-5 border-2 dark:text-black border-black rounded-sm px-1 bg-slate-100">
                Click me to display Date and Time
              </button>
            </div>
            <div className="my-5">
              <button className="px-6 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold tracking-wide">
                Try it youself
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
