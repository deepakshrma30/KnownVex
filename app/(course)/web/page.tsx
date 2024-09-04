"use client";
import { TypewriterEffectSmooth } from "@/components/animation/typewritersmooth";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, FileText, Users } from "lucide-react";
import Reveal from "@/components/animation/reveal";

const words = [
  {
    text: "Web",
    className: "text-purple-500",
  },
  {
    text: "Development",
    className: "text-purple-500",
  },
];

const tabs = [
  {
    id: "tab1",
    heading: "Overview",
    content:
      "hgfhfhhfhjgfhghgfhgfhgfhgkjgkfdgjklhjklsdfgghlkjdsfglkdsfklhgjlhjlkfgdhdsgheiroyhiertghndfghk",
    description: "dfgfdg",
  },
  {
    id: "tab2",
    heading: "Content",
    content:
      "hgfhfhhfhjgfhghgfhgfhgfhgkjgkfdgjklhjklsdfgghlkjdsfglkdsfklhgjlhjlkfgdhdsgheiroyhiertghndfghk",
    description: "dfgfdg",
  },
  {
    id: "tab3",
    heading: "Details",
    content:
      "hgfhfhhfhjgfhghgfhgfhgfhgkjgkfdgjklhjklsdfgghlkjdsfglkdsfklhgjlhjlkfgdhdsgheiroyhiertghndfghk",
    description: "dfgfdg",
  },
];

const features = [
  {
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    icon: <FileText className="text-white w-6 h-6" />,
    bgColor: "bg-blue-500",
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    icon: <Calendar className="text-white w-6 h-6" />,
    bgColor: "bg-orange-500",
  },
  {
    title: "Customer Tracking",
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    icon: <Users className="text-white w-6 h-6" />,
    bgColor: "bg-cyan-500",
  },
];

const highlights = [
  "heelo",
  "very good",
  "super doopercull",
  "awesomesauce",
  "fantabulous",
  "amaze-balls",
  "wonderiffic",
  "splendiferous",
  "marvytastic",
  "coolio",
  "epicness",
  "neat-o",
  "radicalicious",
  "heelo",
  "very good",
  "super doopercull",
  "awesomesauce",
  "fantabulous",
  "amaze-balls",
  "wonderiffic",
  "splendiferous",
  "marvytastic",
  "coolio",
  "epicness",
  "neat-o",
  "radicalicious",
];

const page = () => {
  return (
    <>
      <section className="flex container mt-4  flex-col md:flex-row items-center justify-between">
        {/* left section  */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <TypewriterEffectSmooth words={words} />
          {/* Elevate Your Skills with Innovative Web Development Training */}

          <h2 className="text-2xl font-semibold">
            Ready To Kickstart Your Journey In{" "}
            <span className="text-purple-500">Web Development</span> With Us?
          </h2>
          <p className="text-xl">
            We Can&apos;t Wait To Explore Creativity And Build Amazing Websites
            Together!
          </p>
          <Button className="mt-4 rounded-full">Start Course Now</Button>
        </div>

        {/* right section  */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <img
            src={"/images/course-img.svg"}
            className="w-[650px] h-[500px] "
            alt="course-image"
          />
        </div>
      </section>

      <section className=" bg-[#4805BE]  rounded-2xl container mt-10 ">
        <div className="   text-white p-6  flex flex-col md:flex-row justify-between items-center">
          {/* left part  */}
          <div className="space-y-4 md:w-1/2">
            <div className=" p-4 w-24 rounded-lg">
              <Image src="/images/1.svg" alt="icon" width={100} height={50} />
            </div>
            <h3 className="text-lg font-semibold">Learn The Latest Skills</h3>
            <p className="text-sm">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>

          {/* right part  */}
          <div className="space-y-4 md:w-1/2 mt-8 md:mt-0">
            <div className=" p-4 w-24 rounded-lg">
              <Image src="/images/2.svg" alt="icon" width={100} height={50} />
            </div>
            <h3 className="text-lg font-semibold">Earn a Certificate</h3>
            <p className="text-sm">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>
      </section>

      {/* tabs */}
      <Reveal>
        <section className="container p-4  mt-4 relative">
          <Tabs defaultValue="tab1">
            <TabsList className="grid grid-cols-3  w-full  bg-slate-950 text-white">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className=" data-[state=active]:bg-[#4805BE]  data-[state=active]:text-white"
                >
                  {tab.heading}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <Card>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CardHeader>
                      <CardTitle>{tab.heading}</CardTitle>
                      <CardDescription>{tab.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{tab.content}</p>
                    </CardContent>
                  </motion.div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </Reveal>

      <section className="container mt-4 ">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-lg font-semibold text-purple-600 mb-2">
              ABOUT THE COURSES
            </h2>
            <h1 className="text-4xl font-bold">WHY LEARN FROM KNOWVEX?</h1>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mt-8">
              {features.map((feature, index) => (
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
                    <CardTitle className="text-lg font-semibold text-gray-800 text-center">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container mt-8 p-4">
        <div className="text-center">
          <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
            Key Highlights of our{" "}
            <span className="text-purple-500">Web Development</span> program
          </h3>
        </div>

        <div className="w-full max-w-4xl mx-auto p-6 ">
          <div className="flex flex-wrap justify-center gap-3">
            {highlights.map((highlight, index) => (
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: "black", y: -1 }}
                transition={{ duration: 0.3, ease: "linear" }}
                key={index}
                className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer  hover:text-white"
              >
                {highlight}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
