import { create } from "zustand";

import { createProductsStore } from "./products-store";
import { createShoppingCartStore } from "./shopping-cart-store";
import { createUserStore } from "./user-store";

export const useStore = create((...args) => ({
  ...createProductsStore(...args),
  ...createUserStore(...args),
  ...createShoppingCartStore(...args),
}));
