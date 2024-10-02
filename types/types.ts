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
  };