import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET ?? "", {
  apiVersion: "2020-08-27",
});

export const createProductsStore = (set) => ({
  product: {},
  products: [],

  getProducts: async ({ limit = null } = {}) => {
    const listOptions = { expand: ["data.product"], active: true };

    if (limit !== null) {
      listOptions.limit = limit;
    }

    const res = await stripe.prices.list(listOptions);
    const finalProducts = res.data;
    await set({ products: finalProducts });
    return finalProducts;
  },
  getProduct: async (productId) => {
    const product = await stripe.prices.retrieve(productId, {
      expand: ["product"],
    });

    set({ product });

    return product;
  },
});
