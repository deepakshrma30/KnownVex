"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Mail, Moon, Search, Sun, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCounterStore } from "@/provider/counterProvider";

const AppBar = () => {
  const { setTheme } = useTheme();
  const { count, incrementCount, decrementCount,handleLogin,open } = useCounterStore(
    (state) => state,
  )
  console.log(open,"count")
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link href={"/"} className="text-primary font-black">
            KnownVex
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="group flex items-center cursor-pointer ">
                <span className="group-hover:text-primary text-muted-foreground">
                  courses
                </span>
                <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex items-center">
                  <span>Computer Science</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-48">
                  <Link href={"/course/android"}>
                  <DropdownMenuItem>Android</DropdownMenuItem>
                  </Link>
                  <Link href={"/course/web"}>
                    <DropdownMenuItem>Web</DropdownMenuItem>
                  </Link>
                  <Link href={"/course/ai"}>
                  <DropdownMenuItem>AI</DropdownMenuItem>
                  </Link>
                  <Link href={"/course/devops"}>
                  <DropdownMenuItem>DevOps</DropdownMenuItem>
                  </Link>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <Link href={"/course/finance"}>
              <DropdownMenuItem>Finance</DropdownMenuItem>
              </Link>
              <Link href={"/course/hr"}>
              <DropdownMenuItem>HR</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/about"
            className="text-sm font-medium  hover:text-primary text-muted-foreground"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary text-muted-foreground"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center space-x-4 ">
          {/* <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 w-full"
            />
          </div> */}

          <div
            // href={"/login"}
            className="hover:text-primary  text-muted-foreground"
          >
            <Button onClick={handleLogin}>
              <UserRound className="mr-2 h-4 w-4" /> Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
