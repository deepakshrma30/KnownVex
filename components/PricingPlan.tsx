import { Check, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useCartStore, useStore } from "@/lib/store";
import { useShallow } from "zustand/react/shallow";
import { useAddCart } from "@/services/mutation";
import { addCartProps } from "@/types/types";
import { useCounterStore } from "@/provider/counterProvider";

function PricingPlanCard({
  title,
  description,
  price,
  features,
  recommended = true,
  originalPrice,
  productName,
  planName,
}: {
  title: string;
  description: string;
  price: string;
  features: { name: string; included: boolean }[];
  recommended?: boolean;
  originalPrice: string;
  productName: string;
  planName: string;
}) {
  const apiAdd = useAddCart();
  const { handleLogin } = useCounterStore((state) => state);
  const { active } = useStore(
    useShallow((state) => ({
      active: state.active,
    }))
  );

  const handleClick = (cartItem: addCartProps) => {
    if(active){
      apiAdd.mutate(cartItem);
    }else{
      handleLogin();
    }
  };
  return (
    <Card className="w-full rounded-md ">
      <CardHeader className="flex items-center justify-center rounded-md bg-purple-500 text-white">
        <CardTitle className="text-xl lg:text-2xl font-bold scroll-m-20 ">
          {title}
        </CardTitle>
        {/* <CardDescription className="text-white">{description}</CardDescription> */}
      </CardHeader>
      <CardContent className="flex justify-center flex-col items-center mt-2">
        <div className="mb-6 text-center">
          <span className="text-2xl lg:text-4xl font-bold">
            {parseFloat(originalPrice.replace(/,/g, "")).toLocaleString(
              "en-IN",
              {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }
            )}
          </span>
          {/* <span className="text-muted-foreground">/month</span> */}
          <div className="text-sm text-muted-foreground mt-1">
            <span className="line-through">
              {" "}
              {parseFloat(price.replace(/,/g, "")).toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
            <span className="ml-2 text-xs lg:text-sm text-green-500 font-semibold">
              Save {calculateDiscount(price, originalPrice)}
            </span>
          </div>
        </div>
        <ul className="grid gap-4 text-xs lg:text-sm">
          {features.map((feature, index) => (
            <FeatureItem key={index} included={feature.included}>
              {feature.name}
            </FeatureItem>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full rounded-md bg-purple-500"
          variant={"default"}
          onClick={() => {
            handleClick({ plan: planName, product: productName });
          }}
        >
          Choose Plan
        </Button>
      </CardFooter>
    </Card>
  );
}

function FeatureItem({
  children,
  included = false,
}: {
  children: React.ReactNode;
  included?: boolean;
}) {
  return (
    <li className="grid grid-cols-[25px_1fr] items-start gap-4 leading-none">
      {included ? (
        <Check className="h-5 w-5 text-green-400" />
      ) : (
        <X className="h-5 w-5 text-red-400" />
      )}
      <span>{children}</span>
    </li>
  );
}
function calculateDiscount(price: string, originalPrice: string): string {
  const original = parseFloat(price.replace(/[^0-9.]/g, ""));
  const discounted = parseFloat(originalPrice.replace(/[^0-9.]/g, ""));
  const savings = original - discounted;
  return savings.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
export default PricingPlanCard;
