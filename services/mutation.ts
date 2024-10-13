import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCartItem, deleteCartItem, signUpUser } from "./api";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export function useSignUp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signUpUser
  });
}

export function useAddCart() {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCartItem,
    onSuccess: () => {
      toast.success("Course added to cart", {
        action: {
          label: "Go to Cart",
          onClick: () => router.push("/cart"),
        },
      });

      queryClient.invalidateQueries({ queryKey: ["CART"] });
    },
    onError(error:any, variable, context) {
      console.log(error)
      if(error?.status === 403){
        toast.error("Session Expired Login Again")
      }else{
        toast.error(error.response.data);
      }
    },
  });
}
export function useCartItemDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCartItem,
    onSuccess: () => {
      toast.success("Item deleted successfully")
      queryClient.invalidateQueries({ queryKey: ["CART"] });
    },
    onError(error:any, variable, context) {
      if(error?.status === 403){
        toast.error("Session Expired Login Again")
      }else{
        toast.error(error.response.data);
      }
    },
  });
}
