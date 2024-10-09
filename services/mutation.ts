import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCartItem, deleteCartItem, signUpUser } from "./api";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export function useSignUp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signUpUser,
    // onSuccess: (data:any) => {
    //   console.log('Signup successful:', data);

    // },

    // onError: (error: any) => {
    //   console.log('Error signing up:', error?.response?.data);

    // },
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
    onError(error, variable, context) {
      toast.error(error?.message);
    },
  });
}
export function useCartItemDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCartItem,
    onSuccess: () => {
      toast.error("Item deleted successfully")
      queryClient.invalidateQueries({ queryKey: ["CART"] });
    },
  });
}
