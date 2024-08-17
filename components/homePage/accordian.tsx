"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";

const data = [
  { question: "Question1", answer: "Knowvex is an Innovative Coach Platform designed to assist Students with Internships, Professional training Programs, Career guidance, and mentorship. Our Aim is to bridge the gap between Education and Employment, providing Students with the resources and support they need to Succeed in their Careers." },
  { question: "Question2", answer: "Knowvex is an Innovative Coach Platform designed to assist Students with Internships, Professional training Programs, Career guidance, and mentorship. Our Aim is to bridge the gap between Education and Employment, providing Students with the resources and support they need to Succeed in their Careers." },
  {
    question: "Question3",
    answer:
      "Knowvex is an Innovative Coach Platform designed to assist Students with Internships, Professional training Programs, Career guidance, and mentorship. Our Aim is to bridge the gap between Education and Employment, providing Students with the resources and support they need to Succeed in their Careers.",
  },
];
const Accordian = () => {
  return (
    <section className="w-full mt-2 mb-4 h-[400px]">
      <div className="min-w-fit qna   h-full bg-no-repeat bg-center bg-cover flex items-center justify-end overflow-hidden overflow-y-auto">
        <div className="bg-black p-4 w-[50%] max-h-[400px] text-white mr-16 rounded-lg overflow-hidden overflow-y-auto scrollbar-thin">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2"> <MessageCircleQuestion size={24}/>
          FAQ's</h2>
          <Accordion
            type="single"
            collapsible
            className="rounded-md bg-white text-black p-6 "
          >
            {data?.map((item, index) => (
              <AccordionItem key={index} value={item?.question}>
                <AccordionTrigger>{item?.question}</AccordionTrigger>
                <AccordionContent className="text-left font-normal break-words max-w-[800px]   overflow-hidden  overflow-y-auto">
                  {item?.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Accordian;
