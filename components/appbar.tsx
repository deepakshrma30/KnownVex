"use client";

import Link, { LinkProps } from "next/link";
import React, { useEffect, useState } from "react";
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
import {
  ChevronDown,
  LogIn,
  LogOut,
  LogOutIcon,
  Menu,
  ShoppingBasketIcon,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCounterStore } from "@/provider/counterProvider";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/lib/store";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { docsConfig } from "@/config/docs";
import Image from "next/image";

type NavItem = {
  label: string;
  href?: string;
  className?: string;
  type: "link" | "linkImg" | "dropdown" | "submenu";
  subItems?: NavItem[];
};
const NAV_ITEMS: NavItem[] = [
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
          { label: "Machine Learning", href: "/course/ml", type: "link" },
          { label: "Artificial Intelligence", href: "/course/ai", type: "link" },
          { label: "Data Science", href: "/course/dataScience", type: "link" },
          { label: "Web Development", href: "/course/web", type: "link" },
          { label: "Cyber Security", href: "/course/cyber", type: "link" },
        ],
      },
      {
        label: "ECE",
        type: "submenu",
        subItems: [
          { label: "IoT & Robotics", href: "/course/iot", type: "link" },
          { label: "Cloud Computing", href: "/course/cloudComputing", type: "link" },
        ],
      },
      {
        label: "MEC",
        type: "submenu",
        subItems: [
          {
            label: "Hybrid & Electric Vehicles",
            href: "/course/hybridElectricVehicle",
            type: "link",
          },
          { label: "AutoCAD", href: "/course/autocad", type: "link" },
        ],
      },
      {
        label: "Management",
        type: "submenu",
        subItems: [
          { label: "Digital Marketing", href: "/course/marketing", type: "link" },
          { label: "Finance", href: "/course/finance", type: "link" },
          { label: "Human Resource", href: "/course/hr", type: "link" },
        ],
      },
      {
        label: "Programming Language",
        type: "submenu",
        subItems: [
          { label: "C & C++", href: "/course/cplus", type: "link" },
          { label: "Python", href: "/course/python", type: "link" },
          { label: "Java", href: "/course/java", type: "link" },
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
]

const AppBar = () => {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const router = useRouter();
  const { handleLogin, open } = useCounterStore((state) => state);
  const { name, active,reset } = useStore(
    useShallow((state) => ({
      name: state.name,
      active: state.active,
      reset: state.reset
    }))
  );

  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

  function NavItems({
    items,
    level = 0,
  }: {
    items: NavItem[];
    level?: number;
  }) {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleSubmenu = (label: string) => {
      setExpandedItems((prev) =>
        prev.includes(label)
          ? prev.filter((i) => i !== label)
          : [...prev, label]
      );
    };

    return (
      <ul className={`space-y-1 ${level > 0 ? "ml-4" : ""}`}>
        {items.map((item) => (
          <li key={item.label}>
            {item.type === "linkImg" ? (
              <Link href={item.href || "/"} className={item.className}>
                <Image
                  src={item.label}
                  alt="Knowvex Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            ) : item.type === "link" ? (
              <Link
                href={item.href || "#"}
                className={`block py-2 px-4 text-sm hover:bg-accent rounded-md ${item.className}`}
                onClick={()=>setIsOpen(!isOpen)}
              >
                {item.label}
              </Link>
            ) : (
              <div>
                <Button
                  variant="ghost"
                  className={`w-full justify-between ${item.className}`}
                  onClick={() => toggleSubmenu(item.label)}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      expandedItems.includes(item.label) ? "rotate-180" : ""
                    }`}
                  />
                </Button>
                {expandedItems.includes(item.label) && item.subItems && (
                  <NavItems items={item.subItems} level={level + 1} />
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }
  
  const handleLogout = () => {
    reset()
  }

  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col h-full">
          <ScrollArea className="flex-grow py-4">
            <NavItems items={NAV_ITEMS} />
          </ScrollArea>
          <div className="p-4 border-t">
            {active ? (
              <Button
                className="w-full"
                onClick={handleLogout}
                variant={"destructive"}
              >
                <LogOutIcon className="mr-2 h-4 w-4" />
                Logout
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={() => {
                  setIsOpen(!isOpen);
                  handleLogin();
                }}
                
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white text-base">
      <div className="flex container  h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          {/* Logo */}
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
            }
            return null;
          })}
        </div>
        <div className="hidden lg:flex items-center space-x-8 justify-start w-full ml-8">
          {NAV_ITEMS.filter(
            (item) => item.type === "link" || item.type === "dropdown"
          ).map((item, index) => {
            if (item.type === "link") {
              return (
                <Link
                  key={index}
                  href={item?.href || ""}
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
                    <div
                      className={`${item.className} group flex items-center cursor-pointer`}
                    >
                      <span className="relative group-hover:text-primary text-zinc-700">
                        {item.label}
                        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-primary transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
                      </span>
                      <ChevronDown className="ml-1 h-4 w-4 text-zinc-700 group-hover:text-primary" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {item?.subItems?.map((subItem: any, subIndex: any) => {
                      if (subItem.type === "submenu") {
                        return (
                          <DropdownMenuSub key={subIndex}>
                            <DropdownMenuSubTrigger className="flex items-center">
                              <span>{subItem.label}</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-48">
                              {subItem.subItems.map(
                                (innerItem: any, innerIndex: any) => (
                                  <Link key={innerIndex} href={innerItem.href}>
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

        <div className="hidden lg:flex items-center space-x-4">
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
                  <div className="font-medium text-center capitalize">{name}</div>
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
                      onClick={handleLogout}
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
        <div className="lg:hidden block">
          {active && <Button variant="ghost">
          <Link href="/cart">
                <ShoppingBasketIcon className="h-6 w-6"/>
          </Link>
          </Button>}
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <MobileNav />
    </header>
  );
};

export default AppBar;
