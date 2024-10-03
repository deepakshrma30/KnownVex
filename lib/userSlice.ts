import { UserActions, userInfo } from "@/types/types";
import { StateCreator } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const initialState: userInfo = {
    id:"",
  name: "",
  email: "",
  phoneNumber: "",
  active: null,
  role: "",
};

export type userSlice = UserActions & userInfo;

export const createUserSlice: StateCreator<
  userSlice,
  [["zustand/immer", never]],
  [],
  userSlice
> = (set, get) => ({
    ...initialState,
    setUser:(user:userInfo)=>set((state)=>{
        state.id=user.id
        state.email=user.email,
        state.name=user.name,
        state.phoneNumber=user.phoneNumber,
        state.active=user.active,
        state.role=user.role
    }),
    getUser: () => ({
        name: get().name,
        email: get().email,
        phoneNumber:get().phoneNumber,
        role:get().role
      }),
      setEmail:(email:string)=>set((state)=>{
        state.email=email
      }),
      setActive:(flag:boolean)=>set((state)=>{
        state.active=flag
      }),
    reset:()=>{
        set(initialState)
    }

});
