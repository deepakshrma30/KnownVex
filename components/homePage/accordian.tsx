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
    <section className="w-full mt-2 mb-4 h-[400px]">
      <div className="min-w-fit qna   h-full bg-no-repeat bg-center bg-cover flex items-center justify-end overflow-hidden overflow-y-auto">
        <div className="bg-black p-4 w-[50%] max-h-[400px] text-white mr-16 rounded-lg overflow-hidden overflow-y-auto scrollbar-thin">
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
                  <AccordionTrigger>{item?.question}</AccordionTrigger>
                  <AccordionContent className="text-left font-normal break-words max-w-[800px]   overflow-hidden  overflow-y-auto">
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
