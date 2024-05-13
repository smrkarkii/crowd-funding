import React from "react";
import yatri from "../images/yatri.jpeg";

const Featured = () => {
  return (
    <div className="text-white ">
      <div className="grid  bg-white md:grid-cols-2 px-4 py-8 w-full mt-5">
        <div className="flex flex-row justify-center  w-96 mx-auto mt-5 h-64 border-b-4 border-[#67ffe18c]">
          <img src={yatri} alt="Yatri Bikes" />
        </div>
        <div className="text-black">
          <div className="pt-5">
            <h1 className="text-2xl">Featured Project</h1>
          </div>
          <h1 className="text-xl pt-5 text-[#0091748c] font-bold">
            {" "}
            Yatri Motorbikes
          </h1>
          <p className="pt-4 w-">
            Yatri's vision to reinvent urban mobility landscape means creating
            an entire sustainable ecosystem of products and services. Besides
            electric vehicles, Yatri manufactures charging wall modules, fast
            chargers and seamless service architecture to tie everything
            together into Yatri Hub.
          </p>
          <button className="text-white w-32 rounded p-2 bg-[#10a1848c] mt-5 ">
            View project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
