"use client";

import { useEffect, useMemo, useState } from "react";
import { CreditCard, Truck, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { CartResponse, PlanName, PlanType } from "@/types/types";
import { getCartItems, handleCheckout } from "@/services/api";
import AddressDialog from "@/components/addressDialog";
import { useRazorpay } from "react-razorpay";
import { useStore } from "@/lib/store";
import { useShallow } from "zustand/react/shallow";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Address {
  id: number;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

const cartItems: CartItem[] = [
  { id: 1, name: "Vintage T-Shirt", price: 29.99, quantity: 2 },
  { id: 2, name: "Denim Jeans", price: 59.99, quantity: 1 },
  { id: 3, name: "Sneakers", price: 89.99, quantity: 1 },
];

const initialAddresses: Address[] = [
  {
    id: 1,
    name: "John Doe",
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    country: "USA",
  },
  {
    id: 2,
    name: "Jane Smith",
    street: "456 Elm St",
    city: "Other City",
    state: "NY",
    zipCode: "67890",
    country: "USA",
  },
];

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

  const { Razorpay } = useRazorpay();
  const { data, isError, isLoading } = useQuery<CartResponse[]>({
    queryKey: ["CART"],
    queryFn: getCartItems,
    staleTime: 60 * 1000,
    refetchOnWindowFocus: false,
  });
  const [open, setOpen] = useState<boolean>(false);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [selectedAddress, setSelectedAddress] = useState<number>(addresses[0]?.id || 0);
  const [newAddress, setNewAddress] = useState<Omit<Address, "id">>({
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = shippingMethod === "express" ? 15 : 5;
  const total = subtotal + shippingCost;

  const handleAddAddress = () => {
    const id = addresses.length > 0 ? Math.max(...addresses.map((a) => a.id)) + 1 : 1;
    const addedAddress = { id, ...newAddress };
    setAddresses([...addresses, addedAddress]);
    setSelectedAddress(id);
    setNewAddress({
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    });
    setIsAddressDialogOpen(false);
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses(addresses.filter((address) => address.id !== id));
    if (selectedAddress === id) {
      setSelectedAddress(addresses.length > 1 ? addresses.find((a) => a.id !== id)?.id || 0 : 0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const totalAmount = useMemo(() => {
    if (!data || data.length === 0) return 0;
    const result = data?.reduce((acc, current) => {
      return acc + current.amount;
    }, 0);
    return result;
  }, [data]);

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
                  <RadioGroup value={selectedAddress.toString()} onValueChange={(value) => setSelectedAddress(Number(value))}>
                    <div className="grid gap-4">
                      {addresses.map((address) => (
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
                    <Button variant="outline" onClick={() => setOpen(!open)}>
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
                    onClick={() => {
                      console.log("click");
                      handleCheckout(Razorpay);
                    }}
                  >
                    <CreditCard className="mr-2 h-4 w-4" /> Place Order
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <AddressDialog open={open} setOpen={setOpen} />
        </>
      ) : (
        <div className="flex justify-center items-center h-[20vh] text-5xl font-extrabold">No Items</div>
      )}
    </div>
  );
}
