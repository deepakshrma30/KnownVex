import { SignUpFormData } from "@/types/types";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://3.91.144.249:9000/knowvex/user/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const signUpUser = async (formData: SignUpFormData) => {
  let body = {
    name: formData.userName,
    email: formData.email,
    password: formData.password,
    phoneNumber: formData.phone,
  };
  const response = await axiosInstance.put("/create", body);
  return response.data;
};

export const verifyOtp = async ({
  value,
  email,
  flag
}: {
  value: string;
  email: string;
  flag:boolean
}) => {
  const response = await axiosInstance.get("/otp/verify", {
    params: {
      otp: value,
      email: email,
      isLogin:flag
    },
  });
  return response.data
};

export const OtpResend = async ({
  
  email,
  
}: {
  
  email: string;
  
}) => {
  const response = await axiosInstance.get("/otp/resend", {
    params: {
      
      email: email,
      
    },
  });
  return response.data
};

export const login=async({email,password}:{email:string;password:string})=>{
  let body={
    email:email,
    password:password
  }
  const response=await axiosInstance.post("/login",body)
  return response.data
}
