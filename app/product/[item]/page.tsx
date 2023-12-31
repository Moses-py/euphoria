"use client";
import Navbar from "@/components/navigations/Navbar";
import ImageBox from "./components/ImageBox";
import { useState, useEffect } from "react";
import { useStore } from "@/store/Store";
import { menCollectionItems, womenCollectionItems } from "@/mocks/__mocks__";
import Description from "./components/Description";
import Footer from "@/components/footer/Footer";
import Similar from "./components/Similar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductListing = ({ params }: { params: { item: string } }) => {
  const [itemData, setItemData] = useState<CollectionItem | undefined>();
  const [products] = useStore((state) => [state.products]);

  useEffect(() => {
    const slug_data = decodeURIComponent(params.item);

    const item = menCollectionItems
      .concat(womenCollectionItems)
      .find((product) => {
        return product.name === slug_data;
      });

    setItemData(item);
  }, [params.item, products]);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <ImageBox currentItem={itemData} />
      {itemData && <Description item={itemData} />}
      <Similar />
      <Footer />
    </>
  );
};

export default ProductListing;
