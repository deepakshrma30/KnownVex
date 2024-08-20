import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Home, TabletSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "../animation/reveal";

const cardData = [
  {
    icon: <Home />,
    title: "Web Development",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
  {
    icon: <TabletSmartphone />,
    title: "Android Development",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
  {
    icon: <Bot />,
    title: "Machine Learning",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
  {
    icon: <Home />,
    title: "Marketing",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
];

const Cards = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto text-center">
          <Reveal>
            <h2 className="text-purple-600 text-lg font-semibold">
              OUR PROGRAMS
            </h2>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl font-black mt-2 ">
              WHAT STYLE OF PROGRAMS
            </h1>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl font-black mt-2  mb-12">DO WE OFFER ?</h1>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-6">
              {cardData?.map((item, index) => (
                <Card
                  key={index}
                  className={cn(
                    "max-w-[316px] bg-white text-black p-2 rounded-lg shadow-lg  hover:cursor-pointer",
                    {
                      "mt-6": index % 2 !== 0,
                      "bg-[#807AF9] text-white": index === 0,
                    }
                  )}
                >
                  <CardHeader>
                    <div className="flex items-centre justify-start mb-4">
                      <span
                        className={cn(
                          "inline-block p-3 rounded-full bg-[#FFEFDD] text-purple-500",
                          { "bg-white": index === 0 }
                        )}
                      >
                        {item?.icon}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-left">
                      {item?.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-left">{item?.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Cards;
