import React from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";
import AllCareers from "@/constant/Careers/AllCareers";
import BreadCrumb from "@/components/Common/breadcrumb";

function SingleCareer() {
  const router = useRouter();
  let id = router.query.id;
  // Set SIngle Career
  let career_id: String = " ",
  image: String = "",
  StartDate: String = " ",
  Title: String = " ",
  Location: String = " ",
  Description : String = " ",
  JobType : String = " ",
  ApplicationDeadline : String = " ";
  AllCareers.map((data) => {
  if (data.id === id) {
    career_id = data.id;
    image = data.image;
    StartDate = data.StartDate;
    Title = data.Title;
    Location = data.Location;
    Description = data.Description;
    JobType = data.JobType;
    ApplicationDeadline = data.ApplicationDeadline
  }
});
  return (
    <main className={`flex min-h-screen flex-col justify-between p-0 m-0`}>
      <header>
        <Header />
      </header>
      <BreadCrumb
        pagename={`Career > ${Title}`}
        title={`${Title}`}
        greenText="Career"
        headline={`${Description}`}
        customStyles={"service-background"}
      />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 col-span-2 text-white text-center">
          {Description}
          {" "}
          {Title}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default SingleCareer;
