import React from "react";
import Image from "next/image";
import AccordionSectionConstants from "@/constant/AccordionSection/AccordionSectionDetails";
import SectionAccordion from "../Accordion";

function AccordionSection() {
  return (
    <div className="grid md:grid-rows-1  md:grid-flow-col lg:grid-rows-1 lg:grid-flow-col md:gap-1 p-10 pl-10 md:pt-20 lg:pt-20 xl:pt-30 2xl:pt-20 pb-0 w-full bg-white">
      <div className="row-span-2 w-[100%]">
        <h1 className="text-blue-bold-text font-bold md:text-2xl lg:text-4xl pb-2">
          Have a <span className="text-[#33971F]">question</span> ?
        </h1>
        <SectionAccordion />
      </div>
      <div className="row-end-2 row-span-4">
        <Image
          src={AccordionSectionConstants.LeftImage}
          alt="Nexaya Accordion Image"
          width={1000}
          height={700}
          className="p-10"
        />
      </div>
    </div>
  );
}

export default AccordionSection;
