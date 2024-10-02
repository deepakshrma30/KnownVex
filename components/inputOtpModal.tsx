"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useCounterStore } from "@/provider/counterProvider";
import { useState } from "react";

export default function InputOTPModal() {
  const { otp, handleOTPModal } = useCounterStore((state) => state);
  const [value, setValue] =useState("")
  console.log(value)
  return (
    <Dialog open={otp} onOpenChange={handleOTPModal}>
     <DialogContent className="sm:max-w-[425px] bg-purple-50">
        <DialogHeader>
          <DialogTitle className="text-purple-800">Enter One-Time Password</DialogTitle>
          <DialogDescription className="text-purple-600 flex flex-col items-start space-y-1 mt-2">
            <span>Please enter the 6-digit OTP sent to your E-mail.</span>
            <span className="text-sm text-purple-500">For email verification.</span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-4">
          <InputOTP maxLength={6} value={value}
        onChange={(value) => setValue(value)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} className="border-purple-300 focus:border-purple-500" />
              <InputOTPSlot index={1} className="border-purple-300 focus:border-purple-500" />
              <InputOTPSlot index={2} className="border-purple-300 focus:border-purple-500" />
            </InputOTPGroup>
            <InputOTPSeparator className="text-purple-500" />
            <InputOTPGroup>
              <InputOTPSlot index={3} className="border-purple-300 focus:border-purple-500" />
              <InputOTPSlot index={4} className="border-purple-300 focus:border-purple-500" />
              <InputOTPSlot index={5} className="border-purple-300 focus:border-purple-500" />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="flex justify-end space-x-4">
        <Button 
            variant={"ghost"}
            // className="bg-purple-200 hover:bg-purple-700 text-white"
          >
            Resend
          </Button>
          <Button 
            
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
