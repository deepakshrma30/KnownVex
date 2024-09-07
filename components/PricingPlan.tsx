import { Check, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

function PricingPlanCard({ title, description, price, features, recommended = false }: {
    title: string
    description: string
    price: string
    features: { name: string; included: boolean }[]
    recommended?: boolean
  }) {
    return (
      <Card className="w-full rounded-md ">
        {/* {recommended && (
          <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
            Recommended
          </div>
        )} */}
        <CardHeader className="flex items-center justify-center rounded-md bg-purple-500 text-white">
          <CardTitle className="text-2xl font-bold scroll-m-20 ">{title}</CardTitle>
          <CardDescription className="text-white">{description}</CardDescription>
          {/* <div className="mt-6">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-muted-foreground">/month</span>
          </div> */}
        </CardHeader>
        <CardContent className="flex justify-center flex-col items-center mt-2">
        <div className="mb-6">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <ul className="grid gap-4 text-sm">
            {features.map((feature, index) => (
              <FeatureItem key={index} included={feature.included}>
                {feature.name}
              </FeatureItem>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full rounded-md bg-purple-500" variant={"default"}> 
            Choose {title} Plan
          </Button>
        </CardFooter>
      </Card>
    )
  }
  
  function FeatureItem({ children, included = false }: { children: React.ReactNode; included?: boolean }) {
    return (
      <li className="grid grid-cols-[25px_1fr] items-start gap-4 leading-none">
        {included ? (
          <Check className="h-5 w-5 text-green-400" />
        ) : (
          <X className="h-5 w-5 text-red-400" />
        )}
        <span>{children}</span>
      </li>
    )
  }

  export default PricingPlanCard