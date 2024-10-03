"use client";
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
import { useStore } from "@/lib/store";
import { useCounterStore } from "@/provider/counterProvider";
import { OtpResend, verifyOtp } from "@/services/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useShallow } from "zustand/react/shallow";

export default function InputOTPModal() {
  const { otp, handleOTPModal } = useCounterStore((state) => state);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const { getUser } = useStore(
    useShallow((state) => ({
      getUser: state.getUser,
    }))
  );
  const user = getUser();

  const mutation = useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      // handle success response here
      console.log("OTP verified:", data);
      toast.success("Email verified successfully");
      handleOTPModal();
      setLoading(false);
    },
    onError: (error) => {
      // handle error response here
      console.error("Error verifying OTP:", error);
      setLoading(false);
    },
  });

  const OtpResendMutation=useMutation({
    mutationFn:OtpResend,
    onSuccess(data:any){
      toast.success("OTP resend successfully")
    },
    onError(error, variables, context) {
      toast.error(error.message)
    },

  })

  const handleResend=()=>{
    OtpResendMutation.mutate({email: user?.email ?? ""})
  }

  const handleSubmit = () => {
    setLoading(true);
    mutation.mutate({ email: user?.email ?? "", value: value, flag: user?.name ? true:false });
  };
  console.log(value);
  return (
    <Dialog open={otp} onOpenChange={handleOTPModal}>
      <DialogContent className="sm:max-w-[425px] bg-purple-50">
        <DialogHeader>
          <DialogTitle className="text-purple-800">
            Enter One-Time Password
          </DialogTitle>
          <DialogDescription className="text-purple-600 flex flex-col items-start space-y-1 mt-2">
            <span>Please enter the 6-digit OTP sent to your E-mail.</span>
            <span className="text-sm text-purple-500">
              For email verification.
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-4">
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
                className="border-purple-300 focus:border-purple-500"
              />
              <InputOTPSlot
                index={1}
                className="border-purple-300 focus:border-purple-500"
              />
              <InputOTPSlot
                index={2}
                className="border-purple-300 focus:border-purple-500"
              />
            </InputOTPGroup>
            <InputOTPSeparator className="text-purple-500" />
            <InputOTPGroup>
              <InputOTPSlot
                index={3}
                className="border-purple-300 focus:border-purple-500"
              />
              <InputOTPSlot
                index={4}
                className="border-purple-300 focus:border-purple-500"
              />
              <InputOTPSlot
                index={5}
                className="border-purple-300 focus:border-purple-500"
              />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="flex justify-end space-x-4">
          <Button
            variant={"ghost"}
            // className="bg-purple-200 hover:bg-purple-700 text-white"
            onClick={handleResend}
          >
            Resend
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-purple-600 hover:bg-purple-700 text-white"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
