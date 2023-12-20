import CareerWelcomeSection from '@/components/Career/CareerWelcomeSection';
import BreadCrumb from '@/components/Common/breadcrumb';
import AccordionSection from '@/components/Home/AccordionSection';
import Footer from '@/components/Layout/footer';
import Header from '@/components/Layout/header';
import React from 'react'

function AllCareer() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-between p-0 m-0`}
    >
      <header>
        <Header />
        <BreadCrumb pagename="Career" title="Start Your" greenText="Career" headline="Innovative work, meaningful career opportunities " customStyles={"career-background"}/>
      </header>
    <CareerWelcomeSection />
    <AccordionSection />
    <Footer />
    </main>  );
}

export default AllCareer