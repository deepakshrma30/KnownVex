"use client";
import { TypewriterEffectSmooth } from "@/components/animation/typewritersmooth";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React, { useRef, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import Reveal from "@/components/animation/reveal";
import PricingPlanCard from "@/components/PricingPlan";
import {
  COURSE_CONTANTS,
  FEATURES,
  PRICING_PLAN,
  SERVICES,
} from "@/public/Constants/Course.Constants";

const CoursePage = ({ params }: { params: { type: string } }) => {
  const [selectedProgram, setSelectedProgram] = useState<string>();

  const { type } = params;

  const data = COURSE_CONTANTS[type];



  const pricingSectionRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    if (pricingSectionRef.current) {
      pricingSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return data ? (
    <>
      <Reveal>
      <section className="flex container mt-4  flex-col md:flex-row items-center justify-between">
        {/* left section  */}
        <div className="text-center md:text-left  md:w-1/2 space-y-6">
          <TypewriterEffectSmooth words={data.words} className="hidden md:block"/>
          {/* Elevate Your Skills with Innovative Web Development Training */}
          <h2 className="text-2xl font-semibold">
            Ready To Kickstart Your Journey In{" "}
            <span className={data.words[0].className}>
              {" "}
              {data.words.map((word: any) => word.text)?.join(" ")}{" "}
            </span>{" "}
            With Us?
          </h2>
          <p className="text-xl">{data.description}</p>
          <Button className="mt-4 rounded-full" onClick={scrollToPricing}>
            Start Course Now
          </Button>
        </div>

        {/* right section  */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <img
            src={data.headerImgUrl}
            className="w-[250px] h-[Z00px] md:w-[650px] md:h-[500px] "
            alt="course-image"
          />
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className=" bg-[#4805BE]  rounded-2xl container mt-10 w-auto mx-4 px-2 xl:mx-auto">
        <div className="   text-white p-4 xl:p-6  flex flex-col md:flex-row justify-between md:gap-8">
          {/* left part  */}
          <div className="space-y-4 md:w-2/3">
            {/* <div className=" p-4 w-24 rounded-lg">
              <Image src="/images/1.svg" alt="icon" width={100} height={50} />
            </div> */}
            <h3 className="text-base lg:text-xl font-bold">Program Overview</h3>
            <p className="text-xs lg:text-base">
              {data.programOverview}
            </p>
          </div>
          <div className="w-px min-h-full bg-white"></div>
          {/* right part  */}
          <div className="space-y-4 md:w-1/3 mt-8 md:mt-0">
            {/* <div className=" p-4 w-24 rounded-lg">
              <Image src="/images/2.svg" alt="icon" width={100} height={50} />
            </div> */}
            <h3 className="text-base lg:text-xl font-bold">Delivery Mode</h3>
            <div className="text-xs lg:text-base flex gap-8">
              {data?.deliveryMode.map((mode: any) => (
                <div key={mode.text} className="flex flex-col justify-center items-center gap-2">
                  <img className="w-16" src={mode.icon} alt="" />
                  <span>{mode.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </Reveal>
      {/* tabs */}
      {/* <Reveal>
        <section className="container p-4  mt-4 relative">
          <Tabs defaultValue="tab1">
            <TabsList className="grid grid-cols-3  w-full  bg-slate-950 text-white">
              {data.tabs.map((tab: any) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className=" data-[state=active]:bg-[#4805BE]  data-[state=active]:text-white"
                >
                  {tab.heading}
                </TabsTrigger>
              ))}
            </TabsList>
            {data.tabs.map((tab: any) => (
              <TabsContent key={tab.id} value={tab.id}>
                <Card>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CardContent>
                      <p>{tab.content}</p>
                    </CardContent>
                  </motion.div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </Reveal> */}

      <section className="container px-2 mt-4 ">
        <Reveal>
          <div className="text-center mb-4 xl:mb-12">
            <h2 className="text-lg xl:text-xl font-semibold text-purple-600 mb-2">
              ABOUT THE COURSES
            </h2>
            <h1 className="text-xl xl:text-4xl font-bold">WHY LEARN FROM KNOWVEX?</h1>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mt-8">
              {FEATURES.map((feature: any, index: number) => (
                <Card
                  key={index}
                  className="bg-white max-w-[350px] min-h-full p-4 flex flex-col items-center justify-evenly  shadow-lg rounded-lg relative hover:cursor-pointer"
                >
                  <CardHeader className="pb-4 mb-2 flex flex-col items-center">
                    <div
                      className={`w-12 h-12 absolute -top-6 left-1/2 transform -translate-x-1/2 ${feature.bgColor} rounded-full flex items-center justify-center mb-4`}
                    >
                      {feature.icon}
                    </div>
                    <CardTitle className="text-base lg:text-lg font-semibold text-gray-800 text-center">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs lg:text-sm text-gray-600 text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="container mt-8 p-4">
          <div className="text-center">
            <h3 className="scroll-m-20 text-base font-extrabold tracking-tight text-xl lg:text-4xl">
              Key Highlights of our{" "}
              <span className="text-purple-500">
                {data.words.map((word: any) => word.text)?.join(" ")}
              </span>{" "}
              program
            </h3>
          </div>

          <div className="w-full max-w-4xl mx-auto pt-4 p-0 lg:p-6 ">
            <div className="flex flex-wrap justify-center gap-3">
              {data.highlights.map((highlight: string, index: number) => (
                <motion.div
                  whileHover={{ scale: 1.1, backgroundColor: "black", y: -1 }}
                  transition={{ duration: 0.3, ease: "linear" }}
                  key={index}
                  className="text-nowrap bg-purple-500 text-white px-4 py-2 rounded-full text-xs lg:text-sm font-medium cursor-pointer  hover:text-white"
                >
                  {highlight}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="container mt-8 p-4">
          <h3 className="scroll-m-20 text-center text-base font-extrabold tracking-tight text-xl lg:text-4xl">
            Program Curriculum
          </h3>
          <Accordion type="single" collapsible className="flex flex-col mt-4 lg:mt-6">
            {data?.programCurriculums?.map((item: any, index: any) => (
              <div
                key={index}
                className="rounded-md bg-white text-black pl-4 pr-4"
              >
                <AccordionItem
                  key={index}
                  value={item?.program}
                  onClick={() => {
                    setSelectedProgram((prev) => prev === item?.program ? '' : item?.program);
                  }}
                >
                  <AccordionTrigger
                    className={`${
                      selectedProgram === item?.program ? "text-purple-600" : ""
                    } text-sm lg:text-base text-left`}
                  >
                    {item?.program}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs lg:text-sm text-left font-normal break-words max-w-[800px] overflow-hidden  overflow-y-auto pl-8">
                    <ul className="list-disc">
                      {item?.subProgram.map((item: any) => (
                        <li key={item + Math.random()}>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </section>
      </Reveal>
      <Reveal>
        <section className="container mt-8 p-4">
          <div className="flex flex-col lg:flex-row items-center justify-evenly   px-4 lg:px-16 py-8">
            {/* left section  */}
            <div className="text-center lg:text-left mb-8 lg:mb-0 lg:max-w-md">
              <h1 className="font-bold text-purple-600 text-xl xl:text-4xl">
                Career Boost
              </h1>
              <p className="mt-4 text-base text-gray-700">
                Unlock Your Potential With Dedicated Support That Prepares You
                For Real-World Success!
              </p>
            </div>

            {/* right section  */}

            <div className="relative w-full lg:max-w-xl">
            <div className="absolute inset-0 h-1/2 top-20 w-full bg-purple-200 rounded-lg -z-10" />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES?.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center space-y-1 justify-center bg-white shadow-md rounded-lg p-4 overflow-hidden"
                >
                  {/* Image and Label */}
                  <img src={item.src} className="h-28 object-cover" />
                  <p className="text-sm font-semibold text-gray-700">
                    {item.label}
                  </p>
                  
                  {/* Hover Summary */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-purple-600 bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out p-4">
                    <p className="text-sm">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>
      </Reveal>

      {/* pricing plan  */}
      <Reveal>
        <section
          className="container mx-auto py-12 px-4"
          ref={pricingSectionRef}
        >
          <h3 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-xl lg:text-4xl">
            Choose Your Plan
          </h3>
          <div className="grid gap-8 justify-center items-center grid-cols-1  lg:grid-cols-3 mt-4">
            {PRICING_PLAN.map((plan) => (
              <PricingPlanCard
                key={plan.title}
                title={plan.title}
                description={plan.description}
                price={plan.price}
                features={plan.features}
                recommended={plan.recommended}
                originalPrice={plan.originalPrice}
                productName={data.productName}
                planName={plan.plan}
              />
            ))}
          </div>
        </section>
      </Reveal>
    </>
  ) : <div>Data not present</div>;
};

export default CoursePage;
