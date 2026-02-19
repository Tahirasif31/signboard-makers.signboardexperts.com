import Hero from "@/components/Hero";
import WhyProfessionalSignage from "@/components/WhyProfessionalSignage";
import Process from "@/components/Process";
import SignBoardTypes from "@/components/SignBoardTypes";
import Sectors from "@/components/Sectors";
import TrustedClients from "@/components/TrustedClients";
import CaseStudy from "@/components/CaseStudy";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Services from "@/components/OutdoorServices";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyProfessionalSignage />
      <Services />
      <Process />
      <SignBoardTypes />
      <Sectors />
      <TrustedClients />
      <CaseStudy />
      <WhyChooseUs />
      {/* <Gallery /> */}
      <FAQ />
      <FinalCTA />
      <BlogSection />
      <FloatingWhatsApp />

      <Footer />
    </main>
  );
}
