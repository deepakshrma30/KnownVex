export type SignUpFormData = {
  userName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export interface userInfo {
  id?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  active?: boolean | null;
  role?: "USER" | "ADMIN" | "";
}

export type UserActions = {
  setUser: (user: userInfo) => void;
  getUser: () => userInfo | undefined;
  reset: () => void;
  setEmail: (email: string) => void;
  setActive: (flag: boolean) => void;
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

export interface CartItems {
  id?: string;
  product: string;
  plan: string;

}

export interface CartResponse {
  id: string;
  product: string;
  plan: string;
  amount:number;
  
}
export type addCartProps = {
  product: string;
  plan: string;
};
export interface CartActions {
  addCart: (cartItem: addCartProps) => void;
  getCart: () => void;
  deleteCart: (id: string) => void;
}

export const PlanType = {
  SELF: "Self Paced",
  MENTOR: "Mentor Plan",
  PROFESSIONAL: "Proffesional Plan",
};

export const PlanName = {
  AI: "Artificial Intelligence",
  ML: "Machine Learning",
  DATA_SCIENCE: "Data Science",
  WEB_DEVELOPMENT: "Web Development",
  CYBER_SECURITY: "Cyber Security",
  IOT_ROBOTICS: "IoT & Robotics",
  CLOUD_COMPUTING: "Cloud Computing",
  HYBRID_ELECTRIC_VEHICLE: "Hybrid & Electric Vehicle",
  AUTO_CAD: "AutoCAD",
  DIGITAL_MARKETING: "Digital Marketing",
  FINANCE: "Finance",
  HUMAN_RESOURCE: "Human Resource",
  C_CPLUSPLUS: "C & C++",
  PYTHON: "Python",
  JAVA: "Java",
  ANDROID: "Android Development",
  DEVOPS: "DevOps",
  MARKETING: "Marketing"
};
