import { create } from "zustand";

export const useStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeOne: (id) =>
    set((state) => ({
      cart: state.cart.filter((cart) => cart.id === id),
    })),
  removeAllFromCart: () => set({ cart: [] }),
  updateCart: (newCart) => set({ cart: newCart }),
}));
