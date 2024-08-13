import Carousel from "@/components/Carousel";
import Aboutus from "@/components/homePage/aboutus";
import HeroSection from "@/components/homePage/heroSection";
import { Button } from "@/components/ui/button";
import { RocketIcon, TrophyIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen bg-gradient-to-r  from-blue-50 to-pink-50  ">
      <HeroSection/>
      <Aboutus/>
    </main>
  );
}
