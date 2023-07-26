import { create } from "zustand";

interface Store {
  nav: boolean;
  toggleNav: () => void;
  priceSwitch: boolean;
  styleSwitch: boolean;
  sizeSwitch: boolean;
  priceToggle: () => void;
  styleToggle: () => void;
  sizeToggle: () => void;
  filter: boolean;
  filterToggle: () => void;
}
export const useStore = create<Store>((set, get) => ({
  nav: false,
  toggleNav: () => {
    const navState = get().nav;
    set({ nav: !navState });
  },
  priceSwitch: true,
  styleSwitch: true,
  sizeSwitch: true,
  priceToggle: () => {
    const price = get().priceSwitch;
    set({ priceSwitch: !price });
  },
  styleToggle: () => {
    const style = get().styleSwitch;
    set({ styleSwitch: !style });
  },
  sizeToggle: () => {
    const size = get().sizeSwitch;
    set({ sizeSwitch: !size });
  },
  filter: true,
  filterToggle: () => {
    const filterState = get().filter;
    set({ filter: !filterState });
  },
}));
