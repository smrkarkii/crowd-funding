import React from "react";

const Category = () => {
  return (
    <div className="text-white ">
      <div>
        <h1 className="text-2xl md:text-4xl text-center w-80 md:w-[500px] mx-auto py-5">
          Top Future of Crowdfunding Creative Projects
        </h1>
      </div>
      <div>
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-5 text-center w-fit mx-auto  pb-10">
          <li className="border border-[#67ffe18c] border-3  w-40 h-10 pt-2">
            Arts
          </li>
          <li className="border border-[#67ffe18c] border-3 w-40 h-10 pt-2">
            Comics & Illustration
          </li>
          <li className="border border-[#67ffe18c] border-3 w-40 h-10 pt-2">
            Design & Tech
          </li>
          <li className="border border-[#67ffe18c] border-3 w-40 h-10 pt-2">
            Film
          </li>
          <li className="border border-[#67ffe18c] border-3 w-40 h-10 pt-2 w-">
            Food & Craft
          </li>
          <li className="border border-[#67ffe18c] border-3 w-40 h-10 pt-2">
            Games
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
