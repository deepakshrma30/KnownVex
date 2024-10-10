import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SortAscIcon } from "lucide-react";
import Partners from "@/components/homePage/partners";
const About = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-8 p-4">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-400 mb-4">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Unlocking Potential, Building Skills: Your Journey To Success
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Knowvex is an edtech platform that helps students with
              internships, professional training programs, career guidance, and
              mentorship. Our aim is to bridge the gap between formal education
              and the ever changing requirements of the industry. We at Knowvex
              bring together the students aiming for successful careers,
              knowledge and experience accumulated over the years by our
              industry experts to create a holistic learning platform. Our
              platform helps students discover programs, and get trained in
              their fields of interest with the latest market requirements.
            </p>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/images/aboutus.png"
              alt="Modern office space"
              width={400}
              height={300}
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
      <section className="bg-gradient-to-r mt-6 from-purple-500 to-purple-400 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={"/images/objects.png"}
              width={400}
              height={300}
              alt="Modern office space"
              className=" rounded-lg  object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">OUR MISSION</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              At Knowvex, We Believe Everyone Should Have The Opportunity To
              Create Progress Through Technology And Develop The Skills Of
              Tomorrow. With Assessments, Learning Paths And Courses Authored By
              Industry Experts, Our Platform Helps Individuals Benchmark
              Expertise Across Roles. Our Mission Is To Train The World&apos;s
              Workforce In The Technologies Of The Future. We&apos;re Committed To
              Creating Meaningful Connections To Companies To Assist In
              Recruiting, Transforming Industries, And Teach The Critical Tech
              Skills That Companies Are Looking For In Their Workforce. We Are
              Constantly Working Towards Creating A Name And A Brand That Is
              Synonymous With Success. Success For The Platform, Success For Our
              Clients.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="container mt-4 py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-purple-600 mb-2">
            GREAT TEAM MEMBERS
            </h2>
          <h1 className="text-4xl font-bold">We Have Expert Team</h1>
        </div>
        <Carousel
          opts={{
            align: "center",
          }}
          className="md:w-full mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardHeader>

                      <Image
                        src={"/images/objects.png"}
                        width={400}
                        height={300}
                        alt="Modern office space"
                        className=" rounded-lg  object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                    <h2 className="text-lg font-semibold">hellooooooo</h2>
                    <p className="text-sm text-gray-600">9987889jhgjgjh</p>
                    <p className="mt-2 text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem maxime voluptas laborum officia est nulla harum rem iste sapiente?</p>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <p className="text-orange-300">Enginnering</p>
                      <div className="flex items-center space-x-3">
                      <SortAscIcon className="w-4 h-4"/>
                      <SortAscIcon className="w-4 h-4"/>
                      </div>
                    </CardFooter>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section> */}
      <Partners/>
    </>
  );
};

export default About;
