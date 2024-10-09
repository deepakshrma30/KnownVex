"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// import { useCartStore } from "@/lib/store";
import { getCartItems } from "@/services/api";
import { useCartItemDelete } from "@/services/mutation";
import { CartResponse, PlanName, PlanType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { current } from "immer";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useMemo, useState } from "react";

const initialCartItems = [
  {
    id: 1,
    name: "Vintage T-Shirt",
    price: 29.99,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: 59.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 89.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const { data, isError, isLoading } = useQuery<CartResponse[]>({
    queryKey: ["CART"],
    queryFn: getCartItems,
    staleTime:60 * 1000,
  });

  const deleteCart=useCartItemDelete()

  console.log(data);
  const handleDelete=(id:string)=>{
    deleteCart.mutate({id});
  }

  const totalAmount=useMemo(()=>{
    if (!data || data.length === 0) return 0;
    const result =data?.reduce((acc,current)=>{
      return acc+current.amount;
    },0)
    return result;
  },[data])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Cart Items</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {data?.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <div className="flex-1">
                  <h3 className="font-semibold">
                    {PlanName[item?.product as keyof typeof PlanName]}
                  </h3>
                  <h4 className="font-normal text-sm">
                    {PlanType[item?.plan as keyof typeof PlanType]}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.amount.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>

                <Button variant="secondary" size="icon" onClick={()=>handleDelete(item?.id)}>
                  <Trash2 className="h-6 w-6 text-red-500" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{
                totalAmount?.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })
                }</span>
            </div>
            <div className="flex justify-between">
              <span>GST</span>
              <span>$50</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$50</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Proceed to Checkout</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CartScreen;
