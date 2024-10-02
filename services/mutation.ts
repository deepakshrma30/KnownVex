import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUpUser } from "./api";

export function useSignUp(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:signUpUser,
        // onSuccess: (data:any) => {
        //   console.log('Signup successful:', data);
          
        // },
        
        // onError: (error: any) => {
        //   console.log('Error signing up:', error?.response?.data);
         
        // },
    
      })
}