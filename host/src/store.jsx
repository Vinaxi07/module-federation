import create from "zustand";

const useStore = create((set) => ({
  cart: [],
  addItem: (item) => set((state) => ({ cart: [...state.cart, item]})),
  emptyCart: () => set(() => ({ cart: [] })),
}));

export default useStore;