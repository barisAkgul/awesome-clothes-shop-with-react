import { create } from "zustand";

import { createProductsStore } from "./products-store";
import { createShoppingCartStore } from "./shopping-cart-store";

export const useStore = create((...args) => ({
  ...createProductsStore(...args),
  ...createShoppingCartStore(...args),
}));
