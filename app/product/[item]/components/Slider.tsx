"use client";
import { useStore } from "@/store/Store";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
// import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

import { menCollectionItems, womenCollectionItems } from "@/mocks/__mocks__";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import { randomizeArray } from "@/utils/randomArrayIndexGenerator";

interface SliderProps {
  centerSlide: CollectionItem;
}

const Slider = ({ centerSlide }: SliderProps) => {
  const slides = randomizeArray(
    menCollectionItems.concat(womenCollectionItems)
  );

  const { width } = useWindowSize();
  const size = () => {
    if (width > 630) {
      return "400px";
    } else if (width < 630 && width > 420) {
      return "380px";
    } else {
      return "270px";
    }
  };
  return (
    <>
      <div className="relative">
        <Splide
          hasTrack={false}
          tag="div"
          aria-label="items slide"
          options={{
            rewind: true,
            gap: "2rem",
            autoplay: false,
            pagination: false,
            speed: 500,
            direction: "ttb",
            height: size(),
            width: "80px",
            perPage: 3,
          }}
        >
          <SplideTrack>
            {slides.map((slide, index) => {
              return (
                <SplideSlide key={index}>
                  <Link href={`/product/${slide.name}`}>
                    <Image
                      src={`${slide.image}.jpg`}
                      alt={slide.name}
                      width={80}
                      height={120}
                      className="cursor-pointer border border-gray-3 rounded-lg"
                    />
                  </Link>
                </SplideSlide>
              );
            })}
          </SplideTrack>
          <div className="splide__arrows absolute left-[50%] bottom-[-20%] flex flex-col">
            <button className="splide__arrow splide__arrow--prev relative z-20">
              <Image
                src={"/icons/down.png"}
                alt="left_arrow"
                width={20}
                height={20}
              />
            </button>
            <button className="splide__arrow splide__arrow--next relative z-20">
              <Image
                src={"/icons/up.png"}
                alt="right_arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </Splide>
      </div>
    </>
  );
};

export default Slider;
