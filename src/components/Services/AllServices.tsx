import NexayaServicesDetails from "@/constant/Services/AllServicesItems";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function AllServicesSection() {
  return (
    <div className="all-services-background bg-left-top pl-[10%] lg:pl-[-14%] mt-[5%] pt-[5%] pb-[5%]">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 col-span-6 md:col-start-1 md:col-span-4 lg:col-start-1 lg:col-span-2 xl:col-start-1 xl:col-span-2">
          <h1 className="text-[#FFFFFF] text-2xl md:text-3xl font-bold">
            {" "}
            <span className="text-2xl md:text-3xl text-[#001E33]">Our </span>Services
          </h1>
          <p className="text-[#FFFFFF]">
            Delivering high-quality products, services, and solutions for your
            digital transformation journey!
          </p>
        </div>
        <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-2 xl:col-start-2 xl:col-span-2 p-4 text-bold bg-[#FFFFFF] rounded-lg">
          <Image
            src={`${NexayaServicesDetails[0].icon}`}
            alt={"Nexaya Business Advisory Icon"}
            width={40}
            height={100}
          />
          <h1 className="text-xl text-[#001E33] font-bold md:text-2xl lg:text-2xl pt-4">
            {NexayaServicesDetails[0].title}
          </h1>
          <Link
            href={`/services/:${NexayaServicesDetails[0].id}`}
            className="text-white bg-[#33971F]"
          >
            <p className="text-xs text-[#8387A8] md:text-sm lg:text-sm">
              {" "}
              {NexayaServicesDetails[0].paragraph}{" "}
            </p>
          </Link>
        </div>
        <div className="col-start-2 col-span-4 md:col-start-4 md:col-span-2 lg:col-start-4 lg:col-span-2 xl:col-start-4 xl:col-span-2 p-4 text-bold bg-[#FFFFFF] rounded-lg">
          <Image
            src={`${NexayaServicesDetails[1].icon}`}
            alt={"Nexaya Business Advisory Icon"}
            width={40}
            height={100}
          />
          <h1 className="text-xl text-[#001E33] font-bold md:text-2xl lg:text-2xl pt-4">
            {NexayaServicesDetails[1].title}
          </h1>
          <Link
            href={`/services/:${NexayaServicesDetails[1].id}`}
            className="text-white bg-[#33971F]"
          >
            <p className="text-xs text-[#8387A8] md:text-sm lg:text-sm">
              {" "}
              {NexayaServicesDetails[1].paragraph}{" "}
            </p>
          </Link>
        </div>
        <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-2 lg:col-start-1 lg:col-span-2 xl:col-start-1 xl:col-span-2 p-4 text-bold bg-[#FFFFFF] rounded-lg">
          <Image
            src={`${NexayaServicesDetails[2].icon}`}
            alt={"Nexaya Business Advisory Icon"}
            width={40}
            height={100}
          />
          <h1 className="text-xl text-[#001E33] font-bold md:text-2xl lg:text-2xl pt-4">
            {NexayaServicesDetails[2].title}
          </h1>
          <Link
            href={`/services/:${NexayaServicesDetails[2].id}`}
            className="text-white bg-[#33971F]"
          >
            <p className="text-xs text-[#8387A8] md:text-sm lg:text-sm">
              {" "}
              {NexayaServicesDetails[2].paragraph}{" "}
            </p>
          </Link>
        </div>
        <div className="col-start-2 col-span-4 md:col-start-4 md:col-span-2 lg:col-start-3 lg:col-span-2 xl:col-start-3 xl:col-span-2 p-4 text-bold bg-[#FFFFFF] rounded-lg">
          <Image
            src={`${NexayaServicesDetails[3].icon}`}
            alt={"Nexaya Business Advisory Icon"}
            width={40}
            height={100}
          />
          <h1 className="text-xl text-[#001E33] md:text-2xl lg:text-2xl font-bold pt-4">
            {NexayaServicesDetails[3].title}
          </h1>
          <Link
            href={`/services/:${NexayaServicesDetails[3].id}`}
            className="text-white bg-[#33971F]"
          >
            <p className="text-xs text-[#8387A8] md:text-sm lg:text-sm">
              {" "}
              {NexayaServicesDetails[3].paragraph}{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllServicesSection;
