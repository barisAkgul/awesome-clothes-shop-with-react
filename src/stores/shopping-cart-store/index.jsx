export const createShoppingCartStore = (set, get) => ({
  shoppingCart: [],
  addToShoppingCart: (product) => {
    const { shoppingCart } = get();
    /*If there is a product, increase its quantity by one.
     *Otherwise, add a new one and make the amount one.
     */
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
  },
  removeShoppingCartItem: (product) => {
    const { shoppingCart } = get();

    const finalCart = shoppingCart.filter(
      (cartItem) => cartItem.id !== product.id
    );

    set({ shoppingCart: finalCart });
  },
});
