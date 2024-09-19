"use client";
import React from "react";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { PhoneNumberUtil } from "google-libphonenumber";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

const phoneUtil = PhoneNumberUtil.getInstance();
const text="Contact Us".split(" ")
const ContactUs = () => {
  const formSchema = z.object({
    userName: z.string().min(1, { message: "Name is required" }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Please enter a valid email address",
      }),
    phone: z
      .string({
        required_error: "Phone number is required",
      })
      .min(1, "Phone number is required")
      .refine(
        (value) => {
          try {
            return phoneUtil.isValidNumber(
              phoneUtil.parseAndKeepRawInput(value)
            );
          } catch {
            return false;
          }
        },
        {
          message: "Please enter a valid phone number",
        }
      ),
    description: z
      .string({
        required_error: "Description is required",
      })
      .min(1, "Message is required"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      phone: "",
      description: "",
    },
    mode: "onTouched",
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08, // Stagger delay between letters
      },
    },
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="min-h-screen bg-white text-gray-900 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <motion.div
          className="text-center mb-8 sm:mb-12"
          initial="hidden"
          animate="show"
          variants={headingVariants}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700">
            {"Contact Us".split(" ").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                // className="inline-block"
              >
                {char}{" "}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transform transition-all duration-300 hover:scale-105">
          <motion.div
            className="bg-purple-50 p-6 sm:p-8 rounded-lg shadow-md"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-purple-700">
              Send us a message
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-6"
              >
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          {...field}
                          className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="johnDoe@example.com"
                          {...field}
                          value={field.value}
                          onChange={field.onChange}
                          className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <PhoneInput
                              value={field.value}
                              onChange={field.onChange}
                              defaultCountry="in"
                              className="w-full"
                            />
                          )}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          {...field}
                          rows={4}
                          className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit
                </Button>
              </form>
            </Form>
          </motion.div>
          <motion.div className="lg:pl-8" initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100, delay: 1 }}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-purple-700">
              Get in touch
            </h2>
            <p className="mb-4 sm:mb-6 text-gray-600">
              We&apos;d love to hear from you. Please fill out the form or use the
              contact details below to reach us.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  contact@example.com
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  123 Purple Street, Amethyst City, GEM 12345
                </span>
              </div>
            </div>
            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-purple-700">
                Office Hours
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 10:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
