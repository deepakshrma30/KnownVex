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
import { ChevronDown, LogOut, ShoppingBasketIcon, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useCounterStore } from "@/provider/counterProvider";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/lib/store";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  {
    label: "/images/knowvexLogo2.0.svg",
    href: "/",
    className: "text-primary font-black",
    type: "linkImg",
  },
  {
    label: "Courses",
    type: "dropdown",
    className: "text-base font-medium",
    subItems: [
      {
        label: "Computer Science",
        type: "submenu",
        subItems: [
          { label: "Machine Learning", href: "/course/ml" },
          { label: "Artificial Intelligence", href: "/course/ai" },
          { label: "Data Science", href: "/course/dataScience" },
          { label: "Web Development", href: "/course/web" },
          { label: "Cyber Security", href: "/course/cyber" },
        ],
      },
      {
        label: "ECE",
        type: "submenu",
        subItems: [
          { label: "IoT & Robotics", href: "/course/iot" },
          { label: "Cloud Computing", href: "/course/cloudComputing" },
        ],
      },
      {
        label: "MEC",
        type: "submenu",
        subItems: [
          { label: "Hybrid & Electric Vehicles", href: "/course/hybridElectricVehicle" },
          { label: "AutoCAD", href: "/course/autocad" },
        ],
      },
      {
        label: "Management",
        type: "submenu",
        subItems: [
          { label: "Digital Marketing", href: "/course/marketing" },
          { label: "Finance", href: "/course/finance" },
          { label: "Human Resource", href: "/course/hr" },
        ],
      },
      {
        label: "Programming Language",
        type: "submenu",
        subItems: [
          { label: "C & C++", href: "/course/cplus" },
          { label: "Python", href: "/course/python" },
          { label: "Java", href: "/course/java" },
        ],
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    className: "text-base font-medium",
    type: "link",
  },
  {
    label: "Contact Us",
    href: "/contact",
    className: "text-base font-medium",
    type: "link",
  },
  {
    label: "Admin Data",
    href: "/adminData",
    className: "text-base font-medium",
    type: "link",
  },
];

const AppBar = () => {
  const { setTheme } = useTheme();
  const router = useRouter();
  const { handleLogin, open } = useCounterStore((state) => state);
  const { name, active } = useStore(
    useShallow((state) => ({
      name: state.name,
      active: state.active,
    }))
  );

  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white text-base">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          {NAV_ITEMS.map((item: any, index) => {
            if (item.type === "linkImg") {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`${item.className} hover:text-primary text-zinc-700`}
                >
                  <img style={{ height: "3rem" }} src={item.label} alt="Logo" />
                </Link>
              );
            } else if (item.type === "link") {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`${item.className} relative hover:text-primary text-zinc-700 group`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-primary transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>
              );
            } else if (item.type === "dropdown") {
              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <div className={`${item.className} group flex items-center cursor-pointer`}>
                      <span className="relative group-hover:text-primary text-zinc-700">
                        {item.label}
                        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-primary transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
                      </span>
                      <ChevronDown className="ml-1 h-4 w-4 text-zinc-700 group-hover:text-primary" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {item.subItems.map((subItem: any, subIndex: any) => {
                      if (subItem.type === "submenu") {
                        return (
                          <DropdownMenuSub key={subIndex}>
                            <DropdownMenuSubTrigger className="flex items-center">
                              <span>{subItem.label}</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-48">
                              {subItem.subItems.map(
                                (innerItem: any, innerIndex: any) => (
                                  <Link
                                    key={innerIndex}
                                    href={innerItem.href}
                                  >
                                    <DropdownMenuItem>
                                      {innerItem.label}
                                    </DropdownMenuItem>
                                  </Link>
                                )
                              )}
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        );
                      }
                      return (
                        <Link key={subIndex} href={subItem.href}>
                          <DropdownMenuItem>{subItem.label}</DropdownMenuItem>
                        </Link>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return null;
          })}
        </div>

        <div className="flex items-center space-x-4">
          {active ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  {/* <AvatarImage src="/placeholder.svg?height=32&width=32" alt={name} /> */}
                  <AvatarFallback>
                    {name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-36">
                <div className="grid gap-4">
                  <div className="font-medium text-center">{name}</div>
                  <div className="grid gap-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="/cart">
                        <ShoppingBasketIcon className="mr-2 h-4 w-4" />
                        Cart
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start outline-none"
                    >
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
