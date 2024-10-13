import { SignUpFormData } from "@/types/types";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost/knowvex/",
  headers: {
    "Content-Type": "application/json",
      // "Accept":"application/json, text/plain"
  },
});

export const signUpUser = async (formData: SignUpFormData) => {
  let body = {
    name: formData.userName,
    email: formData.email,
    password: formData.password,
    phoneNumber: formData.phone,
  };
  const response = await axiosInstance.put("user/create", body);
  
  return response.data;
};

export const verifyOtp = async ({
  value,
  email,
  flag,
}: {
  value: string;
  email: string;
  flag: boolean;
}) => {
  const response = await axiosInstance.get("user/otp/verify", {
    params: {
      otp: value,
      email: email,
      isLogin: flag,
    },
  });
  return response.data;
};

export const OtpResend = async ({ email }: { email: string }) => {
  const response = await axiosInstance.get("user/otp/resend", {
    params: {
      email: email,
    },
  });
  return response.data;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  let body = {
    email: email,
    password: password,
  };
  const response = await axiosInstance.post("user/login", body);
  return response.data;
};

export const getCartItems = async () => {
  const response = await axiosInstance.get("/cart/all",{
    // headers: {
    //   "Auth-token":
    //     "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJiZDRlZTQyMy0yYmRlLTRlMjYtOGNlNi0xYjU0NjczMWFmNTciLCJzdWIiOiJhZG1pbjEyM0B5b3BtYWlsLmNvbSIsImlhdCI6MTcyODQxNTIyMiwiZXhwIjoxNzI4NDUxMjIyfQ.MpMyiF6C2M3Z-7M2sraO_S0pWY1gi8-CVErfi8TsYz0",
    // },
  });
  return response?.data;
};

export const addCartItem = async ({
  plan,
  product,
}: {
  plan: string;
  product: string;
}) => {
  let body = {
    product,
    plan,
  };

  const response = await axiosInstance.post("/cart/add", body, {
    headers: {
      "Auth-token":
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJiZDRlZTQyMy0yYmRlLTRlMjYtOGNlNi0xYjU0NjczMWFmNTciLCJzdWIiOiJhZG1pbjEyM0B5b3BtYWlsLmNvbSIsImlhdCI6MTcyODQxNTIyMiwiZXhwIjoxNzI4NDUxMjIyfQ.MpMyiF6C2M3Z-7M2sraO_S0pWY1gi8-CVErfi8TsYz0",
    },
  });

  return response?.data;
};

export const deleteCartItem = async ({ id }: { id: string }) => {
  const response = await axiosInstance.delete("/cart/remove/" + id, {
    headers: {
      "Auth-token":
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJiZDRlZTQyMy0yYmRlLTRlMjYtOGNlNi0xYjU0NjczMWFmNTciLCJzdWIiOiJhZG1pbjEyM0B5b3BtYWlsLmNvbSIsImlhdCI6MTcyODQxNTIyMiwiZXhwIjoxNzI4NDUxMjIyfQ.MpMyiF6C2M3Z-7M2sraO_S0pWY1gi8-CVErfi8TsYz0",
    },
  });
  return response;
};

export const handleCheckout = async (Razorpay:any) => {
  try {
    const { data } = await axiosInstance.get('/order/checkout');

    const { orderId, totalAmount } = data;
    // Step 2: Configure Razorpay options
    const options: RazorpayOrderOptions = {
      key: "rzp_test_yP2ME4oC1YeSUg",
      amount: totalAmount,
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",
      order_id: orderId, 
      handler: async (response) => {
        console.log(response);
        await updateOrderStatus(orderId, 'COMPLETED', response.razorpay_payment_id);
        alert("Payment Successful!");
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#5E05FA",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  } catch (error) {
    console.error('Checkout Error:', error);
    alert('Failed to initiate payment.');
  } finally {
  }
};

// Function to update order status
export const updateOrderStatus = async (orderId:any, status:any, paymentId:any) => {
  try {
    await axiosInstance.put(`/order/${orderId}/status`,{},{params:{status}});
    alert('Payment Successful!');
  } catch (error) {
    console.error('Failed to update order status:', error);
    alert('Payment completed, but status update failed. Retrying...');
  }
};