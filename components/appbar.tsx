"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui//button";

const AppBar = () => {
  const { setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={"/"} className="text-primary">
          KnownVex
        </Link>
        <div className="flex items-center gap-10 ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center cursor-pointer">
                <span className="text-primary">courses</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex items-center">
                  <span>Computer Science</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-48">
                  <DropdownMenuItem>Android</DropdownMenuItem>
                  <DropdownMenuItem>Web</DropdownMenuItem>
                  <DropdownMenuItem>AI</DropdownMenuItem>
                  <DropdownMenuItem>DevOps</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuItem>Finance</DropdownMenuItem>
              <DropdownMenuItem>Hr</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="text-sm font-medium  text-primary">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-primary">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href={"/login"}>Login</Link>

          <Button variant="outline" size="icon">
            <Sun
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              onClick={() => setTheme("dark")}
            />
            <Moon
              className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              onClick={() => setTheme("light")}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
