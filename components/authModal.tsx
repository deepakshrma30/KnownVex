"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Loader2 } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCounterStore } from "@/provider/counterProvider";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { PhoneNumberUtil } from "google-libphonenumber";
import { ScrollArea } from "./ui/scroll-area";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import { useSignUp } from "@/services/mutation";
import { toast } from "sonner";
import { useStore } from "@/lib/store";
import { useShallow } from "zustand/react/shallow";
import { login, verifyOtp } from "@/services/api";
import { loginResponse } from "@/types/types";
import { cookies } from "next/headers";

const phoneUtil = PhoneNumberUtil.getInstance();

export default function AuthModal() {


  const { open, handleLogin,handleOTPModal } = useCounterStore((state) => state);
  const { setUser,setEmail,setActive } = useStore(
    useShallow((state) => ({
      setUser: state.setUser,
      setEmail:state.setEmail,
      setActive:state.setActive
    }))
  );

  const loginMutation=useMutation({
    mutationFn:login,
    onSuccess:(data:loginResponse)=>{
      setIsLoading(false)
      setUser(data)
      if(data.active){
        toast.success("Logged in")
        
        handleLogin()
      }else{
        handleLogin()
        handleOTPModal()
        // setActive(data.active)
      }
    },
    onError(error, variables, context) {
      setIsLoading(false)
      toast.error(error.message)
    },
  })

  const signup = useSignUp();
  const [isLoading, setIsLoading] = useState(false);

  const loginFormSchema = z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Please enter a valid email address",
      }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(8, { message: "Password must be at least 8 characters long" }),
  });

  const SignUpFormSchema = z
    .object({
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
      password: z
        .string({
          required_error: "Password is required",
        })
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[A-Z]/, {
          message: "Password must contain at least one uppercase letter",
        })
        .regex(/[a-z]/, {
          message: "Password must contain at least one lowercase letter",
        })
        .regex(/[0-9]/, {
          message: "Password must contain at least one number",
        })
        .regex(/[@$!%*#?&]/, {
          message: "Password must contain at least one special character",
        }),
      confirmPassword: z
        .string()
        .min(1, { message: "Confirm password is required" }),
    })
    .refine(
      (values) => {
        return values.password === values.confirmPassword;
      },
      {
        message: "Passwords must match!",
        path: ["confirmPassword"],
      }
    );

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signUpForm = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      userName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
    setIsLoading(true);
    loginMutation.mutate(values)

  }

  function onSubmitSignUp(values: z.infer<typeof SignUpFormSchema>) {
    setIsLoading(true);
    signup.mutate(values,{
      
      onSuccess:(data:any)=>{
        setIsLoading(false)
        console.log(data)
        setEmail(data.email)
        
        handleLogin();
        signUpForm.reset();
        handleOTPModal()

      },
      onError: (error: any) => {
        console.log('Error signing up:', error?.response?.data);
        setIsLoading(false);
        toast.error("Error signup",{closeButton:true})
      },
    });

  }

  return (
    <Dialog open={open} onOpenChange={handleLogin}>
      <DialogContent className="sm:max-w-[425px]">
        <ScrollArea className="max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-purple-600">Account</DialogTitle>
              <DialogDescription>
                Login to your account or create a new one.
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-purple-100">
                <TabsTrigger
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  value="login"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  value="signup"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Form {...loginForm}>
                  <form
                    className="space-y-4"
                    onSubmit={loginForm.handleSubmit(onSubmit)}
                  >
                    <FormField
                      control={loginForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter email"
                              {...field}
                              className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Password"
                              {...field}
                              className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                              type="password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="border-purple-300 bg-purple-600 focus:border-purple-500 w-full focus:ring-purple-500"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Logging in...
                        </>
                      ) : (
                        "Log in"
                      )}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              <TabsContent value="signup">
                <Form {...signUpForm}>
                  <form
                    className="space-y-4"
                    onSubmit={signUpForm.handleSubmit(onSubmitSignUp)}
                  >
                    <FormField
                      control={signUpForm.control}
                      name="userName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Name"
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
                      control={signUpForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter email"
                              {...field}
                              className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Password"
                              {...field}
                              value={field.value}
                              onChange={field.onChange}
                              className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                              type="password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Confirm Password"
                              {...field}
                              value={field.value}
                              onChange={field.onChange}
                              className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                              type="password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <PhoneInput
                              value={field.value}
                              onChange={field.onChange}
                              defaultCountry="in"
                              className="w-full"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Signing up...
                        </>
                      ) : (
                        "Sign up"
                      )}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
