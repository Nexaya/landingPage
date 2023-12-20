import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TeamMembersDetails from "@/constant/Team/TeamConstants";

export default function TeamImages() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-5">
        <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-1 md:p-5 lg:col-start-2 lg:col-span-1 lg:p-5 xl:col-start-1 xl:col-span-1 pl-0 md:pl-0 lg:pl-0 ...">
          <Card sx={{ width: 300, height: 500, padding: 0 }}>
            <CardMedia
              sx={{ height: 400 }}
              image={TeamMembersDetails.FirstIamgeLink}
              title="Nexaya team Image"
            />
            <CardContent
              sx={{
                background: "transparent",
                backgroundColor: "#001C2F",
                color: "white",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {TeamMembersDetails.FirstImageName}
              </Typography>
              <Typography gutterBottom component="p">
                {TeamMembersDetails.FirstImageTitle}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="col-start-1 col-span-4 md:col-start-3 md:col-span-1 md:p-5 lg:col-start-3 lg:col-span-1 lg:p-5 xl:col-start-2 xl:col-span-1 pl-0 md:pl-0 lg:pl-0 ...">
          <Card sx={{ width: 300, height: 500, padding: 0 }}>
            <CardMedia
              sx={{ height: 400 }}
              image={TeamMembersDetails.SecondImageLink}
              title="Nexaya team Image"
            />
            <CardContent
              sx={{
                background: "transparent",
                backgroundColor: "#001C2F",
                color: "white",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {TeamMembersDetails.SecondImageName}
              </Typography>
              <Typography gutterBottom component="p">
                {TeamMembersDetails.SecondImageTitle}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-1 md:p-5 lg:col-start-2 lg:col-span-1 lg:p-5 xl:col-start-3 xl:col-span-1 2xl:col-start-3 2xl:col-span-1 pl-0 md:pl-0 lg:pl-0 ...">
          <Card sx={{ width: 300, height: 500, padding: 0 }}>
            <CardMedia
              sx={{ height: 400 }}
              image={TeamMembersDetails.ThirdImageLink}
              title="Nexaya team Image"
            />
            <CardContent
              sx={{
                background: "transparent",
                backgroundColor: "#001C2F",
                color: "white",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {TeamMembersDetails.ThirdImageName}
              </Typography>
              <Typography gutterBottom component="p">
                {TeamMembersDetails.ThirdImageTitle}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="col-start-1 col-span-4 md:col-start-3 md:col-span-1 md:p-5 lg:col-start-3 lg:col-span-1 lg:p-5 xl:col-start-4 xl:col-span-1 2xl:col-start-4 2xl:col-span-1 pl-0 md:pl-0 lg:pl-0 ...">
          <Card sx={{ width: 300, height: 500, padding: 0 }}>
            <CardMedia
              sx={{ height: 400 }}
              image={TeamMembersDetails.FourthImageLink}
              title="Nexaya team Image"
            />
            <CardContent
              sx={{
                background: "transparent",
                backgroundColor: "#001C2F",
                color: "white",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {TeamMembersDetails.FourthIamgeName}
              </Typography>
              <Typography gutterBottom component="p">
                {TeamMembersDetails.FourthImageTitle}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
