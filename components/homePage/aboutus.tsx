import { Phone, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Reveal from "../animation/reveal";
import Link from "next/link";

const Aboutus = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#5E05FA] to-[#24045D]">
      <Reveal>
        <div className="container px-4 mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-16">
          {/* Image container */}
          <div className="self-end w-1/3 xl:w-1/4 shrink-0">
            <Image
              src={"/images/instructorImg.svg"}
              width={350}
              height={300}
              alt="instructor"
              className="object-cover w-full h-auto hidden lg:block"
            />
          </div>

          {/* Content section */}
          <div className="p-4 xl:p-8 shadow-2xl space-y-2 rounded-2xl bg-white my-8  flex-grow">
            <h2 className="text-xs font-semibold uppercase text-gray-600 mb-2 flex items-center gap-4">
              <Users size={20} color="black" />
              About us
            </h2>
            <h3 className="text-base xl:text-xl font-black text-gray-900">
              Empowering Students for Successful Careers
            </h3>
            <p className="mt-2 xl:mt-4 text-gray-600 text-sm leading-relaxed">
              Knowvex is an Innovative Coach Platform designed to assist Students with
              Internships, Professional training Programs, Career guidance, and
              mentorship. Our Aim is to bridge the gap between Education and
              Employment, providing Students with the resources and support they
              need to Succeed in their Careers.
            </p>
            <div className="mt-2 flex items-center space-x-4 p-2 w-fit rounded-md shadow-lg font-bold text-sm">
              <Phone fill="black"/>
              <span>Call Us: 12345-67890</span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Aboutus;
