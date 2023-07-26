import { create } from "zustand";

interface Store {
  nav: boolean;
  toggleNav: () => void;
}
export const useStore = create<Store>((set, get) => ({
  nav: false,
  toggleNav: () => {
    const navState = get().nav;
    set({ nav: !navState });
  },
}));
