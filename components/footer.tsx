import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-7">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-2">
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
              KnownVex
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Knowvex is an Innovative Coach Platform designed to assist
              Students with Internships, Professional training Programs, Career
              guidance, and mentorship. Our Aim is to bridge the gap between
              Education and Employment, providing Students with the resources
              and support they need to Succeed in their Careers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="leading-7 [&:not(:first-child)]:mt-6"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="leading-7 [&:not(:first-child)]:mt-6"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="leading-7 [&:not(:first-child)]:mt-6"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="leading-7 [&:not(:first-child)]:mt-6"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 w-full md:w-auto mb-4 md:mb-0">
            <Input type="email" placeholder="Email" className="max-w-xs" />
            <Button type="submit">Subscribe</Button>
          </div>
          <div className="text-center md:text-right text-gray-600">
            © {new Date().getFullYear()} KnownVex. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
