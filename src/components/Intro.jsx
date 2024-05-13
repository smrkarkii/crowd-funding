import React from "react";

const Intro = () => {
  return (
    <div className="pb-10">
      <div className="text-white  text-4xl sm:text-5xl text-center pt-24 mx-auto font-bold  w-96 md:text-[70px] md:w-[1000px] ">
        Our mission is to Help Bring Vision Into Projects.
      </div>
      <p className="text-white  mx-auto pt-12 text-center max-w-[800px] w-96 text-sm md:w-[900px] md:text-lg">
        Campaign make ideas into reality. It's where creators share new vision
        for creative work with the communities that will come together to fund
        them.
      </p>

      <div className="flex flex-col gap-5 ml-28 pt-10 md:flex-row md:gap-0  h-fit  md:justify-center md:ml-0">
        <div className=" border border-[#67ffe18c] shadow-md shadow-[#67ffe18c] w-64 h-24 flex flex-col justify-center text-center">
          <h2 className="text-4xl text-white font-bold text-center">228,937</h2>
          <p className="text-l md:text-xl text-white">projects funded</p>
        </div>
        <div className=" border shadow-md shadow-[#67ffe18c] w-64 h-24 flex flex-col justify-center text-center">
          <h2 className="text-4xl   text-white font-bold text-center">
            Rs.10000
          </h2>
          <p className="text-l md:text-xl text-white">towards project</p>
        </div>
        <div className=" border border-[#67ffe18c] shadow-md shadow-[#67ffe18c] w-64 h-24 flex flex-col justify-center text-center">
          <h2 className="text-4xl text-white font-bold ">1590</h2>
          <p className="text-l md:text-xl text-white">projects donaters</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
