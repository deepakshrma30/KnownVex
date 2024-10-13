import { SignUpFormData } from "@/types/types";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import axios from "axios";
import { toast } from "sonner";

const axiosInstance = axios.create({
  baseURL: "http://3.91.144.249:9000/knowvex",
  headers: {
    "Content-Type": "application/json",
      "Accept":"application/json, text/plain"
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

export const verifyOtp = async ({ value, email, flag }: { value: string; email: string; flag: boolean }) => {
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

export const login = async ({ email, password }: { email: string; password: string }) => {
  let body = {
    email: email,
    password: password,
  };
  const response = await axiosInstance.post("user/login", body);
  return response.data;
};

export const getCartItems = async () => {
  const response = await axiosInstance.get("/cart/all", {
    // headers: {
    //   "Auth-token":
    //     "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJiZDRlZTQyMy0yYmRlLTRlMjYtOGNlNi0xYjU0NjczMWFmNTciLCJzdWIiOiJhZG1pbjEyM0B5b3BtYWlsLmNvbSIsImlhdCI6MTcyODQxNTIyMiwiZXhwIjoxNzI4NDUxMjIyfQ.MpMyiF6C2M3Z-7M2sraO_S0pWY1gi8-CVErfi8TsYz0",
    // },
  });
  return response?.data;
};

export const addCartItem = async ({ plan, product }: { plan: string; product: string }) => {
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

export const getBillingAddress = async () => {
  const response = await axiosInstance.get("/billing-addresses");
  return response?.data;
};

export const addBillingAddress = async (payload: any) => {
  const response = await axiosInstance.post("/billing-addresses", payload);
  return response?.data;
};

export const deleteBillingAddress = async (addressId: any) => {
  const response = await axiosInstance.delete(`/billing-addresses/${addressId}`);
  return response?.data;
};

export const handleCheckout = async (billingAddress: any) => {
    const { data } = await axiosInstance.post("/order/checkout", billingAddress);
    return data;
};

export const updateOrderStatus = async ({ orderId, status }: { orderId: any; status: any }) => {
  const response = await axiosInstance.put(
    `/order/${orderId}/status`,
    {},
    { params: { status } }
  );
  return response?.data;
};
