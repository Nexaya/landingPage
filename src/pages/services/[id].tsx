import React from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";
import BreadCrumb from "@/components/Common/breadcrumb";
import NexayaServicesDetails from "@/constant/Services/AllServicesItems";

function SngleService() {
  const router = useRouter();
  let id = router.query.id;
  // Set Single Service
  let service_id: String = " ",
    name: String = "",
    title: String = " ",
    icon: String = " ",
    paragraph: String = " ";
  NexayaServicesDetails.map((data) => {
    if (data.id === id) {
      service_id = data.id;
      name = data.name;
      title = data.title;
      icon = data.icon;
      paragraph = data.paragraph;
    }
  });

  return (
    <main className={`flex min-h-screen flex-col justify-between p-0 m-0`}>
      <header>
        <Header />
      </header>
      <BreadCrumb
        pagename={`Services > ${title}`}
        title="Our Individual Specific"
        greenText="Services"
        headline="Excellence, Innovation, Technology"
        customStyles={"service-background"}
      />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 col-span-2 text-white text-center">
          <h1>{title} </h1>
          <p>{paragraph} </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default SngleService;
