"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";

const data = [
  {
    question: "Who is going to function as my mentor?",
    answer:
      "You receive mentoring from professionals in the field who are well-versed in their particular field and have worked in the sector for a considerable amount of time. Throughout your upskilling journey, the method is designed to give concept-clear teaching and useful, hands-on learning.",
  },
  {
    question: "Is it possible to use my program with easy monthly installments?",
    answer:
      "If you meet the basic eligibility requirements, you can simply obtain the same using Free EMI as a means of payment.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "Any of the following payment methods are accepted: UPI, debit/credit cards, Netbanking, and mobile banking."
    },
];

const Accordian = () => {
  const [val, setVal] = useState<string>(data[0]?.question);
  return (
    <section className="w-full mt-2 mb-4 h-auto">
      <div className="min-w-fit qna bg-no-repeat bg-center bg-cover flex items-center justify-center lg:justify-end overflow-hidden text-2xl lg:text-sm">
        <div className="bg-black p-4 w-full lg:w-[50%] text-white lg:mr-16 rounded-lg overflow-hidden m-4 xl:m-12">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MessageCircleQuestion size={24} />
            FAQ&apos;s
          </h2>
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-4"
            value={val}
          >
            {data?.map((item, index) => (
              <div
                key={index}
                className="rounded-md bg-white text-black pl-4 pr-4"
              >
                <AccordionItem
                  key={index}
                  value={item?.question}
                  onClick={() => {
                    setVal(item?.question);
                  }}
                >
                  <AccordionTrigger className="text-left text-sm xl:text-base">{item?.question}</AccordionTrigger>
                  <AccordionContent className="text-left font-normal break-words max-w-[800px] overflow-hidden text-xs xl:text-sm">
                    {item?.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Accordian;
