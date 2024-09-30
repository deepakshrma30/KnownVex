import Aboutus from "@/components/homePage/aboutus";
import Accordian from "@/components/homePage/accordian";
import Banner from "@/components/homePage/banner";
import Cards from "@/components/homePage/cards";
import HeroSection from "@/components/homePage/heroSection";
import Partners from "@/components/homePage/partners";
import OurServices from "@/components/homePage/ourServices";

export default function Home() {
  
  return (
    <main className=" min-h-screen bg-gradient-to-r  from-blue-50 to-pink-50  ">
      <HeroSection />
      <Aboutus />
      <Cards />
      <Banner/>
      <Partners/>
      <Accordian/>
      <OurServices />
    </main>
  );
}
