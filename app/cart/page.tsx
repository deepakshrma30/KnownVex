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
import { useCartStore } from "@/lib/store";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

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
  const getCartItems=useCartStore((state)=>state.getCart)

  const items=getCartItems()
  console.log(items,"items")
    
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Cart Items</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <Button variant="secondary" size="icon">
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
              <span>$50</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
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
