"use client";

import { useEffect, useMemo, useState } from "react";
import { CreditCard, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import { CartResponse, PlanName, PlanType } from "@/types/types";
import { getBillingAddress, getCartItems } from "@/services/api";
import AddressDialog from "@/components/addressDialog";
import { useStore } from "@/lib/store";
import { useShallow } from "zustand/react/shallow";
import { useRouter } from "next/navigation";
import { useCheckoutMutation, useDeleteBillingAddress } from "@/services/mutation";
import { toast } from "sonner";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Address {
  id: string;
  name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phoneNumber: string;
  active: boolean;
  default: boolean;
}

export default function Component() {
  const router = useRouter()
  const { active } = useStore(
    useShallow((state) => ({
      active: state.active,
    }))
  );

  useEffect(() => {
    if(!active){
      console.log(active,'change')
      router.push("/")
    }
  },[active])


  const { data, isError, isLoading } = useQuery<CartResponse[]>({
    queryKey: ["CART"],
    queryFn: getCartItems,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  const billingData = useQuery<Address[]>({
    queryKey: ["BILLING_ADDRESS"],
    queryFn: getBillingAddress,
    staleTime: Infinity,
    refetchOnWindowFocus: false
  });
  const [billingAddressOpen, setBillingAddressOpen] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<string>('');

  useEffect(() => {
    selectBillingAddress();
  },[billingData.isSuccess, billingData.data])

  const selectBillingAddress = ()=>{
    if(billingData?.data?.length){
      const defaultBillingAddress = billingData?.data?.filter((address) => address.default);
      setSelectedAddress(defaultBillingAddress?.[0]?.id || selectedAddress || billingData?.data?.[0]?.id || '')
    }
  }

  const deleteBillingAddress = useDeleteBillingAddress();

  const handleDeleteAddress = (id: string) => {
    deleteBillingAddress.mutate(id,{
      onSuccess(){
        if(selectedAddress === id){
          setSelectedAddress('');
          selectBillingAddress();
        }
      }
    })
  };

  const totalAmount = useMemo(() => {
    if (!data || data.length === 0) return 0;
    const result = data?.reduce((acc, current) => {
      return acc + current.amount;
    }, 0);
    return result;
  }, [data]);

  const handleCheckout = useCheckoutMutation();

  const checkout = () => {
    if(!selectedAddress || !billingData?.data?.length){
      toast.error("Please select a billing address.");
      return;
    }
    const address = billingData.data.find((address) => address.id === selectedAddress);
    if(!address){
      toast.error("Please select a billing address.");
      return;
    }
    handleCheckout.mutate(address);
  }

  return (
    <div className="container mx-auto p-4">
      {data?.length ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Checkout</h1>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedAddress} onValueChange={(value) => {console.log(value);setSelectedAddress(value)}}>
                    <div className="grid gap-4">
                      {billingData?.data?.map((address:any) => (
                        <div key={address.id} className="relative">
                          <Label htmlFor={`address-${address.id}`} className="flex items-center space-x-3 border p-4 rounded-md cursor-pointer hover:bg-muted">
                            <RadioGroupItem value={address.id.toString()} id={`address-${address.id}`} />
                            <div>
                              <p className="font-medium">{address.name}</p>
                              <p className="text-sm text-muted-foreground">{address.street}</p>
                              <p className="text-sm text-muted-foreground">
                                {address.city}, {address.state} {address.zipCode}
                              </p>
                              <p className="text-sm text-muted-foreground">{address.country}</p>
                            </div>
                          </Label>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDeleteAddress(address.id);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete address</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  <div className="mt-4">
                    <Button variant="outline" onClick={() => setBillingAddressOpen(!billingAddressOpen)}>
                      <Plus className="mr-2 h-4 w-4" /> Add New Address
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="h-fit">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  {data?.map((item) => (
                    <div key={item.id} className="flex justify-between py-2">
                      <span>{PlanName[item?.product as keyof typeof PlanName]} ({PlanType[item.plan as keyof typeof PlanType]})</span>
                      <span>
                        {item?.amount.toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                  ))}
                  <Separator className="my-4" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>
                      {totalAmount?.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={checkout}
                  >
                    <CreditCard className="mr-2 h-4 w-4" /> Place Order
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <AddressDialog open={billingAddressOpen} setOpen={setBillingAddressOpen} />
        </>
      ) : (
        <div className="flex justify-center items-center h-[20vh] text-5xl font-extrabold">No Items</div>
      )}
    </div>
  );
}
