import { create } from "zustand";
import { persist } from "zustand/middleware";

import { createProductsStore } from "./products-store";
import { createShoppingCartStore } from "./shopping-cart-store";
import { createUserStore } from "./user-store";

export const useStore = create((...args) => ({
  ...createProductsStore(...args),
  ...createUserStore(...args),
  ...createShoppingCartStore(...args),
  hydrateStore: (data) => {
    const [set] = args;
    set({ ...data });
  },
}));
