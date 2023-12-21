import React from "react";
import { useRouter } from 'next/router';
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";
import AllTeamMainSectionDetails from "@/constant/Team/AllTeamDetails";

function SingleTeam() {
    const router = useRouter();
  return (
    <main className={`flex min-h-screen flex-col justify-between p-0 m-0`}>
      <header>
        <Header />
      </header>
      <div className="grid grid-cols-6 gap-4">
        {AllTeamMainSectionDetails.map((data) => {
          return (
            <>
              <div className="col-start-1 col-span-6">{router.query.id}</div>
            </>
          );
        })}
      </div>
      <Footer />
    </main>
  );
}

export default SingleTeam;
