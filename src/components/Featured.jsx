import React from "react";
import yatri from "../images/yatri.jpeg";

const Featured = () => {
  return (
    <div className="text-white">
      <div className="pt-5">
        <h1 className="text-2xl">Featured Project</h1>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="flex flex-row justify-center  bg-white w-96 mx-auto mt-5 h-64">
          <img src={yatri} alt="Yatri Bikes" />
        </div>
        <div>
          <h1 className="text-xl pt-5"> Yatri Motorbikes</h1>
          <p>
            Yatri's vision to reinvent urban mobility landscape means creating
            an entire sustainable ecosystem of products and services. Besides
            electric vehicles, Yatri manufactures charging wall modules, fast
            chargers and seamless service architecture to tie everything
            together into Yatri Hub. Besides the flagship Project Zero, Yatri
            will expand its product line to a rapidly scalable vehicles from
            summer 2021 into other exciting market segments. These products will
            help save over NPR 200,000 over five year period on fuel costs alone
            and zero maintenance adds to that further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
