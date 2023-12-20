import AboutSection1 from "@/components/About/AboutSection1";
import Counter from "@/components/Home/Counter";
import HeroSection from "@/components/Home/Hero";
import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/footer";
import AccordionSection from "@/components/Home/AccordionSection";
import HomeTeamSection from "@/components/Team/HomeTeamSection";
import HomeServiceSection from "@/components/Services/HomeServiceSection";
import AllServicesSection from "@/components/Services/AllServices";

export default function Home() {
  return (
    <main
      className={`flex z-0 min-h-screen flex-col items-center justify-between p-0 m-0`}
    >
      <header>
        <Header />
        <HeroSection />
      </header>
      <Counter />
      <AboutSection1 />
      <HomeServiceSection />
      <AllServicesSection />
      <HomeTeamSection />
      <AccordionSection />
    <Footer />
    </main>  );
}
