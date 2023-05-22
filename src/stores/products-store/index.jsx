import Stripe from "stripe";

export const createProductsStore = (set) => ({
  product: {},
  products: [],
  getProducts: async () => {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2020-08-27",
    });

    const res = await stripe.prices.list({ expand: ["data.product"] });

    const finalProducts = res.data;
    await set({ products: finalProducts });
    return finalProducts;
  },
  getProduct: async (productId) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2020-08-27",
    });

    const product = await stripe.prices.retrieve(productId, {
      expand: ["product"],
    });

    set({ product });

    return product;
  },
});
