import { create } from "zustand";

import { immer } from "zustand/middleware/immer";
import { createUserSlice, userSlice } from "./userSlice";
import { createJSONStorage, persist } from "zustand/middleware";
export type Store = userSlice;

export const useStore = create<Store>()(
    persist(
        immer((...a) => ({
          ...createUserSlice(...a),
        })),
        {
          name: "user-storage", // Key in localStorage
          storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
          skipHydration: true, // Optional: skip hydration
        }
      )
);
