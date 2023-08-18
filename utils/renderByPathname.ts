import { menCollectionItems, womenCollectionItems } from "../mocks/__mocks__";
import { randomizeArray } from "./randomArrayIndexGenerator";

export const renderByPathname = (path: string) => {
  let verifiedPathProduct: CollectionItem[] = [];
  let products = menCollectionItems.concat(womenCollectionItems);
  switch (path) {
    case "/shop":
      verifiedPathProduct = [...products];
      break;
    case "/shop/men":
      verifiedPathProduct = [...menCollectionItems];
      //
      break;
    case "/shop/women":
      verifiedPathProduct = [...womenCollectionItems];
      break;
    case "/categories/shirts":
      for (let product of products) {
        if (
          product.category === "Plain T-shirts" ||
          product.category === "Printed T-shirts" ||
          product.category === "Full Sleeve" ||
          product.category === "Shirts"
        ) {
          verifiedPathProduct.push(product);
        }
      }
      break;
    case "/categories/jeans":
      for (let product of products) {
        if (product.category === "Jeans") {
          verifiedPathProduct.push(product);
        }
      }
      break;
  }

  return randomizeArray(verifiedPathProduct);
};
