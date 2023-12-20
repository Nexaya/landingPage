import React from "react";

function TeamWelcomeSection() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-screen p-5 mt-10 text-center rounded-md z-10 border-black w-[80%]">
        <div className="hidden m:block lg:block xl:block text-white text-xl w-[100%] col-start-2 col-span-2 bg-[#33971F] p-[5%] mt-[-15%] rounded-lg">
          <h1 className="font-bold">
            We&apos;re a a global and diverse team of makers, thinkers, explorers
            with a passion for innovation and technology.
          </h1>
          <hr className="rounded-lg text-[#0E1B0A]" />
          <p>
            We approach work and play with excitement and experimentation, using
            our expertise and ever growing experience to accompany our clients
            through all phases of their digital and technological adventures.
          </p>
        </div>
        <div className="m:hidden lg:hidden xl:hidden text-white text-xl w-[100%] col-start-1 col-span-4">
        <hr className="rounded-lg text-[#33971F] p-2" />
          <p>
            We&apos;re a a global and diverse team of makers, thinkers, explorers
            with a passion for innovation and technology.
          </p>
        <hr className="text-[#33971F] p-2" />
        </div>
      </div>
    </>
  );
}

export default TeamWelcomeSection;
