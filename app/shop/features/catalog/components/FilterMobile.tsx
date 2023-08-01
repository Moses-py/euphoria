"use client";

import { Drawer } from "vaul";
import Image from "next/image";
import { useStore } from "@/store/Store";
import Button from "@/components/button/Button";
import ColorBox from "../../filters/components/ColorBox";
import IconImage from "../../filters/components/IconImage";
import PriceRangeSlider from "../../filters/components/PriceSlider";
import Sizebox from "../../filters/components/Sizebox";

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

const FilterMobile = () => {
  const [filterToggle, products] = useStore((state) => [
    state.filterToggle,
    state.products,
  ]);

  const [
    priceSwitch,
    styleSwitch,
    sizeSwitch,
    colorSwitch,
    priceToggle,
    styleToggle,
    sizeToggle,
    colorToggle,
    filter,
  ] = useStore((state) => [
    state.priceSwitch,
    state.sizeSwitch,
    state.styleSwitch,
    state.colorSwitch,
    state.priceToggle,
    state.styleToggle,
    state.sizeToggle,
    state.colorToggle,
    state.filter,
  ]);
  return (
    <div>
      <Drawer.Root shouldScaleBackground open={filter} dismissible={false}>
        <Drawer.Trigger asChild className="p-5">
          <button
            className={` px-2 xs:px-4 py-1 border lg:hidden block w-fit float-right font-sans font-normal rounded-md cursor pointer text-gray-1`}
            onClick={filterToggle}
          >
            <span>Filter</span>
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[20px] h-[70%] mt-24 fixed bottom-0 left-0 right-0 pt-[1.5rem] z-50">
            <form className="container border-r border-b border-l overflow-y-scroll">
              {/* Heading */}
              <div className="flex justify-between items-center p-5 border-b">
                <h3 className="md:text-lg text-base text-gray-1 font-serif font-[600]">
                  Filters
                </h3>
                <Image
                  src={"/icons/close.png"}
                  alt={"filter icon"}
                  width={20}
                  height={20}
                  onClick={filterToggle}
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
              {/* Colors */}
              <div className="w-full my-4">
                <div className="flex justify-between items-center p-5 border-b border-t">
                  <h3 className="md:text-lg text-base text-gray-1 font-serif font-[600]">
                    Colors
                  </h3>
                  <IconImage
                    classname="cursor-pointer"
                    onclick={colorToggle}
                    icon={colorSwitch ? "up" : "down"}
                  />
                </div>
                <div
                  className={`my-5 ${
                    !colorSwitch ? "hidden" : "block"
                  } grid grid-cols-3 gap-4 p-4`}
                >
                  <ColorBox color="red" />
                  <ColorBox color="white" />
                  <ColorBox color="black" />
                  <ColorBox color="blue" />
                  <ColorBox color="yellow" />
                  <ColorBox color="green" />
                  <ColorBox color="gray" />
                  <ColorBox color="orange" />
                  <ColorBox color="purple" />
                </div>
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
              <div className="my-3 p-4">
                <Button type="button" variant={"filled"} size={"lg"}>
                  Add filter(s)
                </Button>
              </div>
            </form>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default FilterMobile;
