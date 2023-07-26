"use client";
import Image from "next/image";
import PriceRangeSlider from "./components/PriceSlider";
import Sizebox from "./components/Sizebox";
import { useStore } from "@/store/Store";
import IconImage from "./components/IconImage";

const categories: Category[] = [
  "Shirts",
  "Hoodies",
  "Plain T-shirts",
  "Printed T-shirts",
  "Jeans",
  "Full Sleeve",
  "Gowns",
  "Skirts",
  "Shorts",
  "Joggers",
];

const sizes: Sizes[] = ["XS", "S", "M", "L", "XL", "XXS", "3XL", "4XL", "XXl"];
const styles: Style[] = [
  "Casual",
  "Business",
  "Party",
  "Classic",
  "Sports",
  "Elegant",
];

const Filter = () => {
  const [
    priceSwitch,
    styleSwitch,
    sizeSwitch,
    priceToggle,
    styleToggle,
    sizeToggle,
    filter,
  ] = useStore((state) => [
    state.priceSwitch,
    state.sizeSwitch,
    state.styleSwitch,
    state.priceToggle,
    state.styleToggle,
    state.sizeToggle,
    state.filter,
  ]);
  return (
    <div
      className={`absolute left-[-150%] lg:left-0 lg:relative lg:block md:w-[450px] xs:w-[320px] w-[250px] z-30 mb-5 bg-white ${
        filter ? "left-[0%]" : "left-[-150%] lg:relative"
      } transition-all ease-in duration-300 overflow-x-auto`}
    >
      <div className="border-r border-b border-l">
        {/* Heading */}
        <div className="flex justify-between items-center p-5 border-b">
          <h3 className="md:text-lg text-base text-gray-1 font-serif font-[600]">
            Filters
          </h3>
          <Image
            src={"/icons/filter.png"}
            alt={"filter icon"}
            width={20}
            height={20}
          />
        </div>
        <div className="p-4 my-5">
          <ul className="flex flex-col gap-4">
            {categories.map((category, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-between items-center hover:bg-gray-3 px-3 py-1 cursor-pointer"
                >
                  <span className="sm:text-lg text-base font-sans font-[500] text-gray-1">
                    {category}
                  </span>
                  <Image
                    src={"/icons/right.png"}
                    alt={"filter icon"}
                    width={20}
                    height={20}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        {/* Price */}
        <div className="w-full my-4">
          <div className="flex justify-between items-center p-5 border-b border-t">
            <h3 className="md:text-lg text-base text-gray-1 font-serif font-[600]">
              Price
            </h3>
            <IconImage
              classname="cursor-pointer"
              onclick={priceToggle}
              icon={priceSwitch ? "up" : "down"}
            />
          </div>
          <div className={`my-5 ${!priceSwitch ? "hidden" : "block"}`}>
            <PriceRangeSlider />
          </div>
        </div>
        {/* Size */}
        <div className="w-full my-4">
          <div className="flex justify-between items-center p-5 border-b border-t">
            <h3 className="md:text-lg text-base text-gray-1 font-serif font-[600]">
              Sizes
            </h3>
            <IconImage
              classname="cursor-pointer"
              onclick={styleToggle}
              icon={sizeSwitch ? "up" : "down"}
            />
          </div>
          <div
            className={`grid-cols-3 gap-4 p-4 my-5 ${
              !sizeSwitch ? "hidden" : "grid"
            }`}
          >
            {sizes.map((size, index) => {
              return <Sizebox key={index} size={size} />;
            })}
          </div>
        </div>
        {/* Style */}

        <div className="w-full my-4">
          <div className="flex justify-between items-center p-5 border-b border-t">
            <h3 className="md:text-lg text-base text-gray-1 font-serif font-[600]">
              Dress Style
            </h3>

            <IconImage
              classname="cursor-pointer"
              onclick={sizeToggle}
              icon={styleSwitch ? "up" : "down"}
            />
          </div>
          <div className={`${!styleSwitch ? "hidden" : "block"}`}>
            <ul className="flex flex-col gap-4 p-4 my-5">
              {styles.map((style, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-between items-center hover:bg-gray-3 px-3 py-1 cursor-pointer"
                  >
                    <span className="sm:text-lg text-base font-sans font-[500] text-gray-1">
                      {style}
                    </span>
                    <Image
                      src={"/icons/right.png"}
                      alt={"filter icon"}
                      width={20}
                      height={20}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
