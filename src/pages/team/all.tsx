import BreadCrumb from "@/components/Common/breadcrumb";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";
import AllTeamSection from "@/components/Team/AllTeamSection";
import TeamWelcomeSection from "@/components/Team/TeamWelcomeSection";
import React from "react";

function AllTeams() {
  return (
    <main className={`flex min-h-screen flex-col justify-between p-0 m-0`}>
      <header>
        <Header />
        <BreadCrumb
        pagename="Team"
        title="Our incredible"
        greenText="Team"
        headline="Human Excellence, Innovation, Technology"
        customStyles={"team-background"}
      />
      </header>
      
      <TeamWelcomeSection />
      <AllTeamSection />
      <Footer />
    </main>
  );
}

export default AllTeams;
