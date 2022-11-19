import React from "react";
import { FiInfo } from "react-icons/fi";
const Advertisements = () => {
  return (
    <div className="w-1/5 my-[23vh] flex items-center flex-col  max-h-[100vh] overflow-y-scroll">
      <div className="dark:bg-slate-800 p-8 pb-56 ">
        <h4 className="w-full text-center dark:text-slate-200 flex items-center gap-2">
          ADVERTISEMENT <FiInfo className="text-xl" />
        </h4>
        <div className="w-full bg-blue-400 rounded-md p-6 my-4">
          <h3 className="w-full text-xl text-white">Wanna Learn?</h3>
          <p className="text-red-600">we have so much discounts!!</p>
          <p className="text-xl text-yellow-300 font-black">50% Discount</p>
          <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold">
            Get it Now
          </button>
        </div>
        <div className="w-full bg-blue-400 rounded-md p-6 my-4">
          <h3 className="w-full text-xl text-white">Wanna Learn?</h3>
          <p className="text-red-600">we have so much discounts!!</p>
          <p className="text-xl text-yellow-300 font-black">50% Discount</p>
          <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold">
            Get it Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Advertisements;
