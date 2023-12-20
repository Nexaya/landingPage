import Link from "next/link";
import React from "react";
import Image from "next/image";
import HomeOffersDetail from "@/constant/Services/HomeServiceDetail";

function HomeServiceSection() {
  return (
    <>
      <div className="at-nexaya-background pl-[10%] lg:pl-[-14%]">
        <div className="grid grid-cols-4 gap-4 mt-5 pl-18">
          <div className="col-start-1 col-span-3 md:col-start-1 md:pl-[-10%] lg:w-full md:col-span-2 lg:col-start-1 lg:col-span-1 xl:col-start-1 xl:col-span-1">
            <h1 className="text-white text-2xl md:text-3xl">
              At <span className="text-[#33971F]">nexaya</span> we can be
              your...
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-4 p-[2%] mt-5 bg-[#CEF6C1]/5 bg-transparent border-[1px] border-[#33971F] rounded-lg w-[80%] md:h-2/5 md:w-screen lg:w-[80%] lg:h-2/5">
          <div className="relative top-[-13%] md:hidden md:top-[10%] lg:top-[-4%] left-[-300%] hidden md:block lg:block xl:block md:pl-[-160%] md:w-[350%] md:h-[50%] md:ml-[-50%] lg:pl-[-160%] lg:w-[350%] lg:h-[50%] lg:ml-[-30%]">
            <Image
              src={`${HomeOffersDetail[3].leftImageLink}`}
              alt={"Nexaya Image Designs"}
              width={1200}
              height={500}
            />
          </div>
          <div className="col-start-1 col-span-8 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-2 xl:col-start-2 xl:col-span-2 p-4 text-bold bg-[#33971F] rounded-lg">
            <Image
              src={`${HomeOffersDetail[0].icon}`}
              alt={"Nexaya As Tech Partner Icon"}
              width={40}
              height={100}
            />
            <h1 className="text-xl md:text-2xl lg:text-2xl text-white pt-8">
              {HomeOffersDetail[0].title}
            </h1>
            <Link
              href={`/services/:${HomeOffersDetail[0].id}`}
              className="text-white bg-[#33971F]"
            >
              <p className="text-xs md:text-sm lg:text-sm pt-3">
                {" "}
                {HomeOffersDetail[0].paragraph}{" "}
              </p>
            </Link>
          </div>
          <div className="col-start-1 col-span-8 md:col-start-4 md:col-span-2 lg:col-start-4 lg:col-span-2 xl:col-start-4 xl:col-span-2 p-4 text-bold bg-[#33971F] rounded-lg">
            <Image
              src={`${HomeOffersDetail[1].icon}`}
              alt={"Nexaya As Tech Partner Icon"}
              width={40}
              height={100}
            />
            <h1 className="text-xl md:text-2xl lg:text-2xl text-white pt-8">
              {HomeOffersDetail[1].title}
            </h1>
            <Link
              href={`/services/:${HomeOffersDetail[1].id}`}
              className="text-white bg-[#33971F]"
            >
              <p className="text-xs md:text-sm lg:text-sm">
                {" "}
                {HomeOffersDetail[1].paragraph}{" "}
              </p>
            </Link>
          </div>
          <div className="col-start-1 col-span-8 md:col-start-6 md:col-span-2 lg:col-start-6 lg:col-span-2 xl:col-start-6 xl:col-span-2 p-4 text-bold bg-[#33971F] rounded-lg">
            <Image
              src={`${HomeOffersDetail[2].icon}`}
              alt={"Nexaya As Tech Partner Icon"}
              width={40}
              height={100}
            />
            <h1 className="text-xl md:text-2xl lg:text-2xl text-white pt-8">
              {HomeOffersDetail[2].title}
            </h1>
            <Link
              href={`/services/:${HomeOffersDetail[2].id}`}
              className="text-white bg-[#33971F]"
            >
              <p className="text-xs md:text-sm lg:text-sm">
                {" "}
                {HomeOffersDetail[2].paragraph}{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeServiceSection;
