import React, { Dispatch, SetStateAction, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Loader2, Plus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { PhoneNumberUtil } from "google-libphonenumber";
import { PhoneInput } from "react-international-phone";
import { useAddBillingAddress } from "@/services/mutation";

const phoneUtil = PhoneNumberUtil.getInstance();

const AddressDialog = ({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Updated schema with `defaultAddress` field
  const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(1, { message: "State is required" }),
    pincode: z.string().min(1, { message: "Pincode is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phoneNumber: z.string().refine(
      (value) => {
        try {
          return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(value));
        } catch {
          return false;
        }
      },
      { message: "Please enter a valid phone number" }
    ),
    default: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: "",
      email: "",
      name: "",
      phoneNumber: "",
      pincode: "",
      state: "",
      default: false,
    },
  });

  const addBillingAddress = useAddBillingAddress();

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    addBillingAddress.mutate(values, {
      onSuccess() {
        setIsLoading(false);
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Address</DialogTitle>
          <DialogDescription>Enter the details for the new address.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 sm:space-y-1">
              {/* Existing Form Fields */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} className="border-purple-300 focus:border-purple-500 focus:ring-purple-500" />
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
                      <Input placeholder="johnDoe@example.com" {...field} className="border-purple-300 focus:border-purple-500 focus:ring-purple-500" />
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
                      <Input placeholder="City" {...field} className="border-purple-300 focus:border-purple-500 focus:ring-purple-500" />
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
                      <Input placeholder="State" {...field} className="border-purple-300 focus:border-purple-500 focus:ring-purple-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pincode</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Pincode"
                        {...field}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          const numericValue = inputValue.replace(/[^0-9]/g, "");
                          if (numericValue.length <= 6) {
                            field.onChange(numericValue);
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
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Controller control={form.control} name="phoneNumber" render={({ field }) => <PhoneInput value={field.value} onChange={field.onChange} defaultCountry="in" className="w-full" />} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="default"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-4" style={{ margin: "0.75rem 0" }}>
                    <FormLabel>Set as Default Address</FormLabel>
                    <FormControl>
                      <input type="checkbox" checked={field.value} onChange={(e) => field.onChange(e.target.checked)} style={{ marginTop: "0" }} className="h-5 w-5 space-y-0 border-purple-300 focus:ring-purple-500" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" className="border-purple-300 bg-purple-600 focus:border-purple-500 w-full focus:ring-purple-500" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Adding...
                    </>
                  ) : (
                    "Add Address"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddressDialog;
