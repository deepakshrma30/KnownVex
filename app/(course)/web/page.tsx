import { TypewriterEffectSmooth } from "@/components/animation/typewritersmooth";
import { Button } from "@/components/ui/button";
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
            We Can't Wait To Explore Creativity And Build Amazing Websites
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
                <CardHeader>
                  <CardTitle>{tab.heading}</CardTitle>
                  <CardDescription>{tab.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{tab.content}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  );
};

export default page;
