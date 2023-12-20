import TeamMembersDetails from "@/constant/Team/TeamConstants";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";

function AllTeamSection() {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 mt-10 md:w-full">
        <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3">
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
        <div className="col-start-2 col-span-4 md:col-start-3 md:col-span-2">
          <p className="text-white">
            {" "}
            <span className="text-[#33971F]">Leadership team</span> Operation
            Team
          </p>
        </div>
        <div className="col-start-2 col-span-4">
          <hr className="text-[#FFFFFF]" />
        </div>
        <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-2">
          <Card sx={{ width: 300, height: 500, padding: 0 }}>
            <CardMedia
              sx={{ height: 470 }}
              image={TeamMembersDetails.FirstIamgeLink}
              title="Nexaya team Image"
            />
          </Card>
        </div>
        <div className="col-start-2 col-span-4 md:col-start-4 md:col-span-2">
          <Card sx={{ width: 300, height: 500, padding: 0 }}>
            <CardMedia
              sx={{ height: 470 }}
              image={TeamMembersDetails.SecondImageLink}
              title="Nexaya team Image"
            />
          </Card>
        </div>
        <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-2">
          <Card sx={{ width: 300, height: 500, padding: 0 }}>
            <CardMedia
              sx={{ height: 470 }}
              image={TeamMembersDetails.ThirdImageLink}
              title="Nexaya team Image"
            />
          </Card>
        </div>
        <div className="col-start-2 col-span-4 md:col-start-4 md:col-span-2">
          <Card sx={{ width: 300, height: 500, padding: 0 }}>
            <CardMedia
              sx={{ height: 470 }}
              image={TeamMembersDetails.FourthImageLink}
              title="Nexaya team Image"
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default AllTeamSection;
