import React from "react";
import TeamImages from "./TeamImages";
import Link from "next/link";
import { Button } from "@mui/material";

function HomeTeamSection() {
  return (
    <>
      <div className="grid grid-cols-8 gap-4 mt-10">
        <div className="text-2xl md:text-3xl text-white col-start-1 col-span-8 md:col-start-1 md:col-span-3 lg:col-start-1 lg:col-span-3 xl:col-start-1 xl:col-span-3 pl-6 md:pl-10 md:pt-15 lg:pl-[20%] lg:pt-15 xl:pl-15 xl:pt-10">
          <h1 className="">
            Leadership <span className="text-[#33971F]"> Team</span>
          </h1>
          <p className="text-sm text-[#8387A8]">
            {" "}
            Some details about the team,Some detailes about the team, Some
            detailes about the team
          </p>
        </div>

        <div className="col-start-1 col-span-8 md:col-start-7 md:col-span-2 lg:col-start-7 lg:col-span-2 xl:col-start-7 xl:col-span-2 pl-6 md:pl-20 md:pt-10 lg:pr-[22%] lg:pt-10 xl:pl-20 xl:pr-[22%] xl:pt-10 text-bold w-full mt-0">
          <Link href={"/team/all"} className="text-white bg-[#33971F] h-[100%]">
            <Button
              className="bg-primary-green text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              variant="contained"
              sx={{ "&:hover": { backgroundColor: "#33971F" } }}
            >
              Meet The Team
            </Button>
          </Link>
        </div>
      </div>
      <TeamImages />
    </>
  );
}

export default HomeTeamSection;
