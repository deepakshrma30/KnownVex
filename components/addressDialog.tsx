import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { PhoneNumberUtil } from "google-libphonenumber";
import { PhoneInput } from "react-international-phone";

const phoneUtil = PhoneNumberUtil.getInstance();
const AddressDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(1, { message: "State is required" }),
    pinCode: z.string().min(1, { message: "Pincode is required" }),
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
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: "",
      email: "",
      name: "",
      phone: "",
      pinCode: "",
      state: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Address</DialogTitle>
          <DialogDescription>
            Enter the details for the new address.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4 sm:space-y-1"
            >
              <FormField
                control={form.control}
                name="name"
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
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="City"
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
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="State"
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
                name="pinCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pincode</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="PinCode"
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          // Ensure only numeric values
                          const numericValue = inputValue.replace(
                            /[^0-9]/g,
                            ""
                          );

                          // Optional: Add validation for length (e.g., 6 digits for certain regions)
                          if (numericValue.length <= 6) {
                            field.onChange(numericValue); // Update pinCode if valid
                          }
                        }}
                        className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                        maxLength={6}
                        inputMode="numeric"
                        pattern="[0-9]*"
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
              <DialogFooter>
                <Button type="submit">Add Address</Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddressDialog;
