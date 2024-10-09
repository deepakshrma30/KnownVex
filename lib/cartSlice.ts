import { getCartItems } from "@/services/api";
import { useAddCart } from "@/services/mutation";
import { addCartProps, CartActions, CartItems } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { StateCreator } from "zustand";

const initialState:CartItems={
    id:"",
    plan:"",
    product:""
}

export type CartSlice=CartItems & CartActions

export const createCartSlice:StateCreator<CartSlice,[["zustand/immer", never]],[],CartSlice>=(set,get)=>({
    ...initialState,
    addCart:async(cartItem:addCartProps)=>{
        // const apiAdd=useAddCart();
        // apiAdd.mutate(cartItem);
    },
    getCart:async()=>{
        // const result =useQuery({queryKey:["CART"],queryFn:getCartItems}) 
        // return result  
    },
    deleteCart:async(id:string)=>{

    }
})