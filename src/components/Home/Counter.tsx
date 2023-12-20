import React from "react";

function Counter() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 bg-whiteShade w-[80%] p-5 mt-10 text-center rounded-md z-10 border-black w-[80%] pl-10">
        <div>
          <h1 className="text-base font-bold md:text-2xl lg:text-4xl">20+</h1>
          <p className="text-lightText text-xs md:text-base lg:text-xl">
            {" "}
            Clients
          </p>
        </div>
        <div>
          <h1 className="text-base font-bold md:text-2xl lg:text-4xl">4+</h1>
          <p className="text-lightText text-xs md:text-base lg:text-xl">
            Branches
          </p>
        </div>
        <div>
          <h1 className="text-base font-bold md:text-2xl lg:text-4xl">60+</h1>
          <p className="text-lightText text-xs md:text-base lg:text-xl">
            Employees
          </p>
        </div>
        <div>
          <h1 className="text-base font-bold md:text-2xl lg:text-4xl">30+</h1>
          <p className="text-lightText text-xs md:text-base lg:text-xl">
            Projects
          </p>
        </div>
      </div>
    </>
  );
}

export default Counter;
