import { create } from "zustand";

interface Store {
  nav: boolean;
  toggleNav: () => void;
  priceSwitch: boolean;
  styleSwitch: boolean;
  sizeSwitch: boolean;
  colorSwitch: boolean;
  priceToggle: () => void;
  styleToggle: () => void;
  sizeToggle: () => void;
  colorToggle: () => void;
  filter: boolean;
  filterToggle: () => void;
  products: CollectionItem[];
  setProducts: (arr: CollectionItem[]) => void;
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
  colorSwitch: true,
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
  colorToggle: () => {
    const color = get().colorSwitch;
    set({ colorSwitch: !color });
  },
  filter: false,
  filterToggle: () => {
    const filterState = get().filter;
    set({ filter: !filterState });
  },
  products: [],
  setProducts: (arr: CollectionItem[]) => {
    set({ products: arr });
  },
}));
