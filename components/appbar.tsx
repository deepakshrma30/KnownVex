"use client";

import Link from "next/link";
import React, { useEffect } from "react";
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
import { ChevronDown, LogOut, Mail, Moon, Search, Settings, ShoppingBasketIcon, Sun, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useCounterStore } from "@/provider/counterProvider";

import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/lib/store";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { createUserSlice } from "@/lib/userSlice";

const AppBar = () => {
  const { setTheme } = useTheme();
  const { handleLogin, open } = useCounterStore((state) => state);
  const { name } = useStore(
    useShallow((state) => ({
      name: state.name,
    }))
  );

  console.log(name, "name");

  useEffect(() => {
    useStore.persist.rehydrate()
  }, [])
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link href={"/"} className="text-primary font-black">
            Knowvex
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

        <div className="flex items-center space-x-4">
          {name ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  {/* <AvatarImage src="/placeholder.svg?height=32&width=32" alt={name} /> */}
                  <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-36">
                <div className="grid gap-4">
                  <div className="font-medium text-center">{name}</div>
                  <div className="grid gap-2">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/profile">
                        <ShoppingBasketIcon className="mr-2 h-4 w-4" />
                        
                        Cart
                      </Link>
                    </Button>
                    {/* <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Link>
                    </Button> */}
                    <Button variant="ghost" className="w-full justify-start">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Button onClick={handleLogin}>
              <UserRound className="mr-2 h-4 w-4" /> Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppBar;
