import { SignUpFormData } from "@/types/types";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://3.91.144.249:9000/knowvex/",
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
  const response = await axiosInstance.get("/cart/all");
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

  const response = await axiosInstance.post("/cart/add", body);

  return response?.data;
};

export const deleteCartItem = async ({ id }: { id: string }) => {
  const response = await axiosInstance.delete("/cart/remove/" + id);
  return response;
};
