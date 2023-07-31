"use client";
import ProductCard from "@/components/product/ProductCard";
import Title from "@/components/title/Title";
import { menCollectionItems, womenCollectionItems } from "@/mocks/__mocks__";
import { randomizeArray } from "@/utils/randomArrayIndexGenerator";
import { useEffect, useState } from "react";

const Similar = () => {
  const [random, setRandom] = useState<CollectionItem[] | undefined>();
  useEffect(() => {
    const random: CollectionItem[] = randomizeArray(
      menCollectionItems.concat(womenCollectionItems)
    );

    setRandom(random);
  }, []);

  return (
    <>
      <div className="container my-[1rem] p-3 xl:p-[1.5rem]">
        <Title>Similar Products</Title>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[1rem] xs:gap-[2rem] mt-[2rem] md:mt-[3rem]">
          {random &&
            random!.slice(0, 8).map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  img={item.image}
                  brand={item.brand}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Similar;
