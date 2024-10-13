import { create } from "zustand";

import { immer } from "zustand/middleware/immer";
import { createUserSlice, userSlice } from "./userSlice";
import { createJSONStorage, persist } from "zustand/middleware";
import { CartSlice, createCartSlice } from "./cartSlice";
export type Store = userSlice;


export const useStore = create<Store>()(
    persist(
        immer((...a) => ({
          ...createUserSlice(...a),
        })),
        {
          name: "user-storage", // Key in localStorage
          storage: createJSONStorage(() => sessionStorage), // Use localStorage for persistence
          skipHydration: true, // Optional: skip hydration
        }
      ),
      // immer((...a) => ({
      //   ...createCartSlice(...a),
      // })),
);

export const useCartStore = create<CartSlice>()(
  immer((...a) => ({
    ...createCartSlice(...a),
  }))
);