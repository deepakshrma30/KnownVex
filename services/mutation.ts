import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBillingAddress, addCartItem, deleteBillingAddress, deleteCartItem, handleCheckout, signUpUser, updateOrderStatus } from "./api";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { RazorpayOrderOptions, useRazorpay } from "react-razorpay";
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

export function useAddBillingAddress(){
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:addBillingAddress,
    onSuccess: () => {
      toast.success("Address added successfully")
      queryClient.invalidateQueries({ queryKey: ["BILLING_ADDRESS"] });
    },
    onError(error:any, variable, context) {
      if(error?.status === 403){
        toast.error("Session Expired Login Again")
      }else{
        toast.error(error.response.data);
      }
    }
  })
}

export function useDeleteBillingAddress(){
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:deleteBillingAddress,
    onSuccess: () => {
      toast.success("Address deleted successfully")
      queryClient.invalidateQueries({ queryKey: ["BILLING_ADDRESS"] });
    },
    onError(error:any, variable, context) {
      if(error?.status === 403){
        toast.error("Session Expired Login Again")
      }else{
        toast.error(error.response.data);
      }
    }
  })
}


export function useCheckoutMutation() {
  const router = useRouter();
  const { Razorpay } = useRazorpay();
  const updateOrderStatus = useUpdateOrderStatusMutation()

  return useMutation(
    {
      mutationFn: handleCheckout,
      onSuccess: (data) => {
        const { orderId, totalAmount } = data;

        const options: RazorpayOrderOptions = {
          key: "rzp_test_yP2ME4oC1YeSUg",
          amount: totalAmount,
          currency: "INR",
          name: "Knowvex",
          order_id: orderId,
          handler: async (response: any) => {
            console.log(response);
            updateOrderStatus.mutate({orderId, status : "COMPLETED"});
            router.push("/");
          },
          prefill: {
            name: data?.billingAddress.name,
            email: data?.billingAddress.email,
            contact: "1234567890",
          },
          theme: { color: "#5E05FA" },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
      },
      onError: () => {
        toast.error("Failed to initiate payment.");
      },
    }
  );
};

export function useUpdateOrderStatusMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateOrderStatus,
    onSuccess: () => {
      toast.success("Order Placed Successfully");
      queryClient.invalidateQueries({ queryKey: ["CART"] });
    },
    onError: () => {
      toast.error(
        "Payment status update failed. Please wait 2-3 working days for verification."
      );
    },
  });
}
