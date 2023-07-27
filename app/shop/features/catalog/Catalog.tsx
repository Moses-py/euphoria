"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { useStore } from "@/store/Store";
const Catalog = () => {
  const [filterToggle, products] = useStore((state) => [
    state.filterToggle,
    state.products,
  ]);
  const [count, setCount] = useState(10);
  const [allProducts, setAllProducts] = useState<CollectionItem[]>([]);

  useEffect(() => {
    const truncProducts = () => {
      setAllProducts(products.slice(0, count));
    };
    truncProducts();
  }, [count, products]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-[0.93rem] lg:py-5 xs:px-5 px-2 ">
        <h3 className="md:text-lg text-base text-gray-1 font-serif font-[600]">
          Shop
        </h3>
        <button
          className="px-2 xs:px-4 py-1 border lg:hidden block w-fit float-right font-sans rounded-md cursor pointer"
          onClick={filterToggle}
        >
          Filter
        </button>
      </div>
      <hr />
      <div className="xs:p-5 p-2 my-[2rem]">
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xs:gap-[2rem] gap-[0.5rem]">
          {allProducts!.length > 0 &&
            allProducts?.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  name={item.name}
                  img={item.image}
                  brand={item.brand}
                  price={item.price}
                />
              );
            })}
        </div>
      </div>
      <div className={`my-5 p-4`}>
        {count > products.length ? (
          <p className="font-semibold text-primary text-base font-sans text-center">
            That is all for now...
          </p>
        ) : (
          <button
            className="py-8 border border-gray-2 font-sans font-semibold text-primary text-base rounded-md grid place-items-center w-full hover:bg-gray-2 transition-all ease-in duration-200"
            onClick={() => setCount((prev) => prev + 10)}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default Catalog;
