import React from "react";

function CareerWelcomeSection() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-screen p-5 mt-10 text-center rounded-md z-10 border-black w-[80%]">
        <div className="hidden m:block lg:block xl:block text-white text-xl w-[100%] col-start-2 col-span-2 bg-[#33971F] p-[5%] mt-[-15%] rounded-lg">
          <p>
            Welcome to nexaya&apos;s career page, where boundless potential meets
            exciting opportunities! We are a fast-growing technology and
            innovation company operating in Europe and Africa.
          </p>
        </div>
        <div className="m:hidden lg:hidden xl:hidden text-white text-xl w-[100%] col-start-1 col-span-4">
          <p>
            <span className="text-[#33971F] font-bold text-2xl">Welcome</span>{" "}
            to nexaya&apos;s career page, where boundless potential meets exciting
            opportunities! We are a fast-growing technology and innovation
            company operating in Europe and Africa.
          </p>
        </div>
      </div>
    </>
  );
}

export default CareerWelcomeSection;
