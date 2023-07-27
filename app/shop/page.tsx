"use client";
import Navbar from "@/components/navigations/Navbar";
import Shopboard from "./features/Shopboard";
import { useStore } from "@/store/Store";
import { useEffect } from "react";
import { menCollectionItems, womenCollectionItems } from "@/mocks/__mocks__";
import { randomizeArray } from "@/utils/randomArrayIndexGenerator";

const Shop = () => {
  const [setProducts] = useStore((state) => [state.setProducts]);
  useEffect(() => {
    const collection = randomizeArray(
      menCollectionItems.concat(womenCollectionItems)
    );

    setProducts(collection);
  }, [setProducts]);
  return (
    <>
      <main>
        <Navbar />
        <hr />
        <Shopboard />
      </main>
    </>
  );
};

export default Shop;
