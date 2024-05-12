import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <>
      <div className="text-white flex max-w-[1240px] mx-auto items-center h-24">
        <h1 className="text-3xl font-bold text-[#67ffe18c] fixed">K-BLOGS</h1>
        <ul className=" hidden md:flex mx-auto space-evenly">
          <li className="p-12">Discover</li>
          <li className="p-12">Home</li>
          <li className="p-12">Investor</li>
          <li className="p-12">About Us</li>
          <li className="p-12">Donations</li>
        </ul>
        <div className="fixed right-2 md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div
          className={
            !nav
              ? "fixed top-0  w-[60%] border-r border-[#e9e9f511] h-full bg-[#232323] ease-in-out duration-200"
              : "fixed left-[-100%]"
          }
        >
          <ul className="pt-24">
            <li className="p-2 border-b border-gray-300">Discover</li>
            <li className="p-2 border-b border-gray-300">Home</li>
            <li className="p-2 border-b border-gray-300">Investor</li>
            <li className="p-2 border-b border-gray-300">About Us</li>
            <li className="p-2 ">Donations</li>
          </ul>
        </div>
        <button className="text-white w-32 rounded p-2 bg-[#67ffe18c] fixed right-8">
          Start Project
        </button>
      </div>
    </>
  );
};

export default Navbar;
