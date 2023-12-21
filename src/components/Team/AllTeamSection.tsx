import React from "react";
import Image from "next/image";
import TeamMembersDetails from "@/constant/Team/TeamConstants";
import AllTeamMainSectionDetails from "@/constant/Team/AllTeamDetails";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { BorderVerticalRounded } from "@mui/icons-material";

function AllTeamSection() {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 mt-10 md:w-full pl-[5%] md:pl-0">
        <div className="col-start-1 col-span-6 md:col-start-2 md:col-span-3">
          <h1 className="font-bold text-[#FFFFFF] text-2xl">
            <span className="text-[#33971F]">Nexaya</span> Team
          </h1>
          <p className="text-[#FFFFFF]">
            We You&apos;ve come to the right place if you have a passion for
            technology and innovative solutions and want to be part of dynamic
            team that is shaping the future. Our enthusiasm for pushing
            boundaries is what sets us apart!
          </p>
        </div>
        <div className="font-bold col-start-1 col-span-6 md:col-start-2 md:col-span-2">
          <p className="text-white">
            {" "}
            <span className="text-[#33971F]">Leadership </span>Team
          </p>
        </div>
        <div className="hidden text-white md:block lg:block xl:block 2xl:block md:col-start-4 md:col-span-1">Operation <span className="text-[#33971F] font-bold"> Team</span></div>

        <div className="col-start-1 col-span-6">
          <hr className="text-[#FFFFFF]" />
        </div>
        <div className="col-start-1 col-span-6 md:ml-0 md:ml-0 md:col-start-1 md:col-span-2 lg:col-start-2 lg:col-span-2 rounded-lg">
        <Image
            src={`${AllTeamMainSectionDetails[0].personImageLink}`}
            alt={"Nexaya Team Member Image"}
            width={500}
            height={1000}
            style={{borderRadius: "4px"}}
          />
        </div>
        <div className="col-start-1 col-span-6 md:col-start-3 md:col-span-2 lg:col-start-4 lg:col-span-2">
        <Image
            src={`${AllTeamMainSectionDetails[1].personImageLink}`}
            alt={"Nexaya Team Member Image"}
            width={500}
            height={1000}
            style={{borderRadius: "4px"}}
          />
        </div>
        <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden col-start-1 col-span-6">
          <p className="text-white">
            {" "}
            Operation
            <span className="text-[#33971F]"> Team</span>
          </p>
        </div>
        <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden col-start-1 col-span-6">
          <hr className="text-[#FFFFFF]" />
        </div>
        <div className="col-start-1 col-span-6 md:col-start-5 md:col-span-2 lg:col-start-2 lg:col-span-2">
        <Image
            src={`${AllTeamMainSectionDetails[2].personImageLink}`}
            alt={"Nexaya Team Member Image"}
            width={500}
            height={1000}
            style={{borderRadius: "4px"}}
          />
        </div>
        <div className="col-start-1 col-span-6 md:col-start-3 md:col-span-2 lg:col-start-4 lg:col-span-2 text-center">
        <Image
            src={`${AllTeamMainSectionDetails[3].personImageLink}`}
            alt={"Nexaya Team Member Image"}
            width={500}
            height={1000}
            style={{borderRadius: "4px"}}
          />
        </div>
      </div>
    </>
  );
}

export default AllTeamSection;
