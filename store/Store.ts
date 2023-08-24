import { isItemInArray } from "@/utils/isItemInArray";
import { updateWishlistCollection } from "@/utils/isItemInWishList";
import generateRandomString from "@/utils/randomStringGenerator";
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
  cart: CartArray[];
  updateCart: (item: CartItem, command: Command) => void;
  clearCart: () => void;
  wishlist: ProductItemSummary[];
  updateWishlist: (item: ProductItemSummary, command: WishlistCommand) => void;
  user: User;
  loginUser: (data: Pick<User, "name" | "password">) => void;
  orders: Orders[];
  setOrders: (order: Orders) => void;
  cancelOrder: (orderID: string) => void;
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

  cart: [],
  updateCart: (item: CartItem, command: Command) => {
    const currentCart = get().cart;
    set({ cart: isItemInArray(currentCart, item, command) });
  },
  clearCart: () => {
    set({ cart: [] });
  },
  wishlist: [],
  updateWishlist: (item: ProductItemSummary, command: WishlistCommand) => {
    const currentWishList = get().wishlist;
    set({ wishlist: updateWishlistCollection(currentWishList, item, command) });
  },
  user: {
    name: "",
    password: "",
    phonenumber: "+1234567890",
    address: [
      {
        role: "default",
        addressData: {
          streetNumber: "08",
          streetname: "Okey Eze street",
          city: "Ipaja",
          country: "Nigeria",
          zipcode: "100234",
          state: "Lagos",
        },
      },
    ],
    userId: "",
    orders: [],
  },
  loginUser: (data: Pick<User, "name" | "password">) => {
    const userId = generateRandomString(20);
    const userData: User = {
      ...data,
      phonenumber: "+1234567890",
      address: [
        {
          role: "default",
          addressData: {
            streetNumber: "08",
            streetname: "Okey Eze street",
            city: "Ipaja",
            country: "Nigeria",
            zipcode: "100234",
            state: "Lagos",
          },
        },
      ],
      userId,
      orders: [],
    };
    set({ user: { ...userData, userId } });
  },
  orders: [],
  setOrders: (order: Orders) => {
    const currentOrders = get().orders;
    const getUser = get().user;
    const modifiedUser = {
      ...getUser,
      orders: getUser.orders?.concat([order.orderId]),
    };
    getUser.orders?.push(order.orderId);
    set({ orders: [...currentOrders, order] });
    set({ user: { ...modifiedUser } });
  },
  cancelOrder: (orderID: string) => {
    const currentOrders = get().orders;
    for (let order of currentOrders) {
      if (order.orderId === orderID) {
        order.status = "Cancelled";
        break;
      }
    }

    set({ orders: currentOrders });
  },
}));
