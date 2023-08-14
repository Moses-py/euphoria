"use client";
import Navbar from "@/components/navigations/Navbar";
import { useStore } from "@/store/Store";
import { useEffect } from "react";
import { menCollectionItems, womenCollectionItems } from "@/mocks/__mocks__";
import { randomizeArray } from "@/utils/randomArrayIndexGenerator";
import Shopboard from "@/app/components/Shopboard";

const Shirts = () => {
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
        <Shopboard />
      </main>
    </>
  );
};

export default Shirts;
