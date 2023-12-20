import Link from "next/link";
import Image from "next/image";
import React from "react";
import AboutNexayaDetail from "../../constant/AboutNexaya/AboutNexaya";

function AboutSection1() {
  return (
    <>
      <div className="bg-white w-full">
        <div className="grid grid-cols-6 gap-4 md:pl-0 lg:pl-0 mt-[-7%] lg:mt-[-4%] md:mt-[-4%] bg-white pt-[10%] mt-[-4%]">
          <div className="hidden md:grid lg:grid col-start-1 col-span-1 md:col-span-1 lg:col-span-1 ml-[-8%]">
            <Image
              src={AboutNexayaDetail.leftImage}
              alt=""
              width={80}
              height={700}
              className=""
            />
          </div>
          <div className="col-start-2 col-span-6 md:col-span-4 lg:col-span-3">
            <h1 className="text-base font-bold md:text-2xl lg:text-4xl pb-2">
              {" "}
              {AboutNexayaDetail.TechRevolutionTitle}
            </h1>
            <p className="text-lightText">
              {" "}
              {AboutNexayaDetail.TechRevolutionText}
            </p>
          </div>
          <div className="col-start-2 col-span-6 md:col-span-4 md:col-start-2 md:mt-[-10%] lg:col-span-3 lg:col-start-2 lg:mt-[-10%]">
            <h1 className="text-base font-bold md:text-2xl lg:text-4xl pb-2">
              {" "}
              {AboutNexayaDetail.BuildingAfricaTitle}
            </h1>
            <p className="text-lightText">
              {" "}
              {AboutNexayaDetail.BuildingAfricaText}
            </p>
          </div>
          <div className="col-start-2 col-span-6 md:col-span-2 md:col-start-2 lg:col-span-2 lg:col-start-2">
            <Link href="/" className="">
              <Image
                src={AboutNexayaDetail.MissionImage}
                alt=""
                width="70"
                height="50"
                className="pt-4"
              />
            </Link>
            <h2 className="text-base font-bold md:text-2xl lg:text-2xl">
              {AboutNexayaDetail.MissionTitle}{" "}
            </h2>
            <p className="text-lightText">{AboutNexayaDetail.MissionsText}</p>
          </div>
          <div className="col-start-2 col-span-6 md:col-span-2 md:col-start-4 lg:col-span-2 lg:col-start-4 ...">
            <Link href="/" className="">
              <Image
                src={AboutNexayaDetail.VisionImage}
                alt="Nexaya Vector"
                width="70"
                height="50"
                className=""
              />
            </Link>
            <h2 className="text-base font-bold md:text-2xl lg:text-2xl">
              {AboutNexayaDetail.VissionTitle}{" "}
            </h2>
            <p className="text-lightText">{AboutNexayaDetail.VissionsText}</p>
          </div>
          <div className="hidden md:grid lg:grid top-10 col-start-1 col-span-1 md:col-span-1 lg:col-span-1 md:mt-[-350%] lg:mt-[-260%] xl:mt-[-260%] 2xl:mt-[-200%] w-[100%]">
            <Image
              src={AboutNexayaDetail.rightImage}
              alt="Nexaya Vector"
              width={1000}
              height={700}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection1;
