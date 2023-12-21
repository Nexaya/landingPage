import React from "react";
import BreadCrumb from "@/components/Common/breadcrumb";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";
import NexayaServicesDetails from "@/constant/Services/AllServicesItems";

function AllServices() {
  return (
    <main className={`flex min-h-screen flex-col justify-between p-0 m-0`}>
      <header>
        <Header />
        <BreadCrumb
          pagename="Services"
          title="Our Individual Specific"
          greenText="Services"
          headline="Excellence, Innovation, Technology"
          customStyles={"service-background"}
        />
      </header>

      <Footer />
    </main>
  );
}

export default AllServices;
