import BreadCrumb from '@/components/Common/breadcrumb';
import Footer from '@/components/Layout/footer';
import Header from '@/components/Layout/header';
import React from 'react'

function About() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-between p-0 m-0`}
    >
      <header>
        <Header />
        <BreadCrumb
        pagename="About"
        title="About"
        greenText="Nexaya"
        headline="Human Excellence, Innovation, Technology"
        customStyles={"team-background"}
      />
      </header>

    <Footer />
    </main>  );
}

export default About