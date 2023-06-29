export const createShoppingCartStore = (set, get) => ({
  shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")) || [],
  addToShoppingCart: (product) => {
    const { shoppingCart } = get();
    const finalCart = shoppingCart.find(
      (cartItem) => cartItem.id === product.id
    )
      ? shoppingCart.map((cartItem) => {
          return cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        })
      : [...shoppingCart, { ...product, quantity: 1 }];

    set({ shoppingCart: finalCart });
    localStorage.setItem("shoppingCart", JSON.stringify(finalCart));

    return finalCart;
  },
  increaseShoppingCartItemCount: (product) => {
    const { shoppingCart } = get();
    const finalCart = shoppingCart.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    set({ shoppingCart: finalCart });
    localStorage.setItem("shoppingCart", JSON.stringify(finalCart));

    return finalCart;
  },
  decreaseShoppingCartItemCount: (product) => {
    const { shoppingCart } = get();
    const finalCart = shoppingCart.map((cartItem) =>
      cartItem.id === product.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1,
          }
        : cartItem
    );

    set({ shoppingCart: finalCart });
    localStorage.setItem("shoppingCart", JSON.stringify(finalCart));
  },
  removeShoppingCartItem: (product) => {
    const { shoppingCart } = get();
    const finalCart = shoppingCart.filter(
      (cartItem) => cartItem.id !== product.id
    );

    set({ shoppingCart: finalCart });
    localStorage.setItem("shoppingCart", JSON.stringify(finalCart));
  },
  clearShoppingCart: () => {
    set({ shoppingCart: [] });
    localStorage.removeItem("shoppingCart");
  },
});
