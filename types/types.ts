export type SignUpFormData = {
    
    userName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
  };

  export interface userInfo {
    id?:string;
    name?: string;
    email?: string;
    phoneNumber?:string;
    active?:boolean | null
    role?:"USER" | "ADMIN" | ""
  }

  export type UserActions = {
    
    setUser: (user: userInfo) => void;
    getUser:()=>userInfo | undefined;
    reset:()=>void;
    setEmail:(email:string)=>void;
    setActive:(flag:boolean)=>void
  };

  export interface loginResponse {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    active: boolean;
    role: "ADMIN" | "USER" | ""; // Assuming different roles exist, you can adjust accordingly
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
  }

  export  interface CartItems{
    id?:string;
    product:string;
    plan:string;

  }

  export type addCartProps={
    product:string;
    plan:string
  }
  export interface CartActions{
    addCart:(cartItem:addCartProps)=>void;
    getCart:()=>void;
    deleteCart:(id:string)=>void
  }