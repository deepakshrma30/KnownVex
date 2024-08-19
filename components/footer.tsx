import React from "react";

import { Button } from "./ui/button";

const footerSections = [
  {
    heading: "Resources",
    links: [
      { name: "Academy" },
      { name: "Blog" },
      { name: "Guides" },
      { name: "Tutorials" },
      { name: "Support" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About Us" },
      { name: "Careers" },
      { name: "Press" },
      { name: "Partners" },
      { name: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { name: "Privacy Policy" },
      { name: "Terms of Service" },
      { name: "Cookie Policy" },
      { name: "Accessibility" },
      { name: "Security" },
    ],
  },
];

const Footer = () => {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat h-[37rem] mt-32 relative"
      style={{ backgroundImage: "url('/images/Footer 17 Dark.svg')" }}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 bg-gradient-to-r from-pink-500 to-teal-400 p-8 rounded-xl flex justify-between">
        <span className="text-2xl font-extrabold text-white">
          Start Your Journey to Career Excellence Here
        </span>
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant={"secondary"}>Contact Us</Button>
        </div>
      </div>

      <div className="text-white pt-24 px-36">
        <div className="flex gap-48">
          {footerSections.map((section, index) => (
            <div key={index}>
              <span className="text-xl font-extrabold mb-1 inline-block">
                {section.heading}
              </span>
              <ul className="text-sm font-light">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="hover:font-bold cursor-pointer"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-1 bg-white opacity-50 my-16"></div>
        <div className="flex flex-col items-center">
          <div className="flex gap-4 mb-3">
            <img
              className="w-8 transition-transform duration-150 cursor-pointer hover:-translate-y-2"
              src="./images/twitter.svg"
              alt="Twitter"
            />

            <img
              className="w-8 transition-transform duration-150 cursor-pointer hover:-translate-y-2"
              src="./images/linkedin.svg"
              alt="LinkedIn"
            />
            <img
              className="w-8 transition-transform duration-150 cursor-pointer hover:-translate-y-2"
              src="./images/facebook.svg"
              alt="Facebook"
            />
          </div>
          <div className="text-center text-sm">
            <p>© 2019 Lift Media Online S.L.</p>
            <p>Ronda Sant Pere 52, 08010 Barcelona,</p>
            <p>
              Inscripción en el Registro Mercantil de Barcelona. Tomo 46606,
              Folio 37, Hoja 525271.
            </p>
          </div>
          <div className="flex gap-2 items-center self-end mt-8 font-medium">
            <span>100% Safe and secure Payments with</span>
            <img
              className="p-1 bg-white"
              src="./images/razerPay.svg"
              alt="RazerPay"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
