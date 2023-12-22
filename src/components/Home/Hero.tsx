import Link from "next/link";
import React from "react";
import Image from "next/image";
import HOMEHEADER from "../../constant/HeaderConstant/HomeHeader";

function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 w-screen bg-[#0E1B0A] md:pl-[7%] lg:md:pl-[7%] m-0 pt-20 sm:text-left bg-no-repeat bg-center overfllow-hidden hero-background">
        <div className="col-start-1 col-span-4 md:col-span-4 lg:col-span-2 pl-6 md:pl-0 lg:pl-0 ...">
          <div className="text-white text-3xl lg:text-6xl md:text-[70px] pt-[20%] md:pt-[15%]">
            <h1>
              <span className="text-[#33971F] font-bold">Enhancing</span>{" "}
              Businesses Through Technology
            </h1>
          </div>
          <div className="sm:text-3xl md:text-xl lg:text-2xl xl:text-7xl blur-lg md:blur-lg solutions-blur-image">
            Digital Solutions
          </div>
        </div>
        <div className="col-start-1 col-span-4 md:col-span-4 lg:col-span-4 pl-6 md:pl-0 lg:pl-0">
          <p className="hidden md:block lg:block xl:block text-white px-2 w-full">
            We believe that the right use of technology can significantly
            improve many <br /> aspects of our lives and work.
          </p>
        </div>
        <div className="col-start-1 col-span-4 pl-6 md:pl-0 lg:pl-0 xl:pl-0 md:mt-5 lg:mt-5 xl:mt-5">
          <div className="hrrd-hero-btn-wrap">
            <Link href="/services/all" className="text-white">
              <button className="bg-primary-green text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {HOMEHEADER.ActionBtnText}
              </button>
            </Link>
          </div>
        </div>
        <div className="col-start-1 col-span-4 md:col-span-1 lg:col-span-1 ... pt-5 pr-5 pl-6 md:pl-0 lg:pl-0">
          <Link href="/">
            <Image
              src={HOMEHEADER.Global_Growth}
              alt="Nexaya Growth Icon"
              width="60"
              height="40"
              className="p-2"
            />
          </Link>
          <h2 className="focus-text text-white text-xl">
            Global Growth Support{" "}
          </h2>
          <p className="text-lightText">
            Nexaya fuels the growth of businesses and startups worldwide. Our
            global team blends international knowledge and local insights to
            provide hands-on support, emphasizing digital transformation,
            cybersecurity, and technology strategy for robust growth.
          </p>
        </div>
        <div className="col-start-1 col-span-4 md:col-span-1 md:col-start-2 lg:col-span-1 lg:col-start-2 ... pl-6 pt-5">
          <Link href="/">
            <Image
              src={HOMEHEADER.People_Centric}
              alt=""
              width="70"
              height="50"
              className="p-2"
            />
          </Link>
          <h2 className="focus-text text-white text-xl">
            People-Centric Innovation{" "}
          </h2>
          <p className="text-lightText">
            At Nexaya, innovation is rooted in people. We prioritize
            human-centric values, offering not only cutting-edge solutions but
            also personalized partnerships. This commitment ensures our clients
            are well-equipped for the future..
          </p>
        </div>
        <div className="col-start-1 col-span-4 md:col-span-1 md:col-start-3 lg:col-span-1 lg:col-start-3 ... pl-6 pt-5">
          <Link href="/">
            <Image
              src={HOMEHEADER.Local_impact}
              alt=""
              width="70"
              height="50"
              className="p-2"
            />
          </Link>
          <h2 className="focus-text text-white text-xl">
            Local Impact, Global Expertise{" "}
          </h2>
          <p className="text-lightText">
            Nexaya fuels the growth of businesses and startups worldwide. Our
            global team blends international knowledge and local insights to
            provide hands-on support, emphasizing digital transformation,
            cybersecurity, and technology strategy for robust growth.
          </p>
        </div>
        {/* <div className="col-start-1 col-span-1 ...">02</div>

        <div className="col-start-1 col-span-3 ...">03</div> */}
      </div>
    </>
  );
}

export default HeroSection;
