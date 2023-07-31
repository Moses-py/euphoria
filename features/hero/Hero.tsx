"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import BackgroundImage from "./components/BackgroundImage";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative">
      <Splide
        hasTrack={false}
        tag="section"
        aria-label="My Favorite Images"
        // onActive={(slide) => {
        //   console.log(slide);
        // }}
        options={{
          rewind: true,
          gap: "1rem",
          type: "loop",
          autoplay: true,
          pauseOnHover: true,
          pagination: false,
          speed: 500,
          drag: true,
          keyboard: true,
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <BackgroundImage
              image={"bg_1"}
              content="Summer value pack"
              category={"Tshirts / Tops"}
              description={"cool / colorful / comfy"}
            />
          </SplideSlide>
          <SplideSlide>
            <BackgroundImage
              image={"bg_4"}
              content="High quality fibre material"
              category={"Printed Polo"}
              description={"snazzy / cotton / party"}
            />
          </SplideSlide>
          <SplideSlide>
            <BackgroundImage
              image={"bg_3"}
              content="Winter cover snags"
              category={"Hoodie Tints"}
              description={"fit / vintage / causten"}
            />
          </SplideSlide>
          <SplideSlide>
            <BackgroundImage
              image={"bg_2"}
              content="Christmas came early tonight"
              category={"50% off sales!!!"}
              description={"Holiday promo!!!"}
            />
          </SplideSlide>
        </SplideTrack>
        <div className="hidden splide__arrows justify-end gap-6 my-3">
          <button className="splide__arrow splide__arrow--prev relative z-30 text-red-600">
            <Image
              src={"/icons/left.png"}
              alt="left_arrow"
              width={30}
              height={30}
            />
          </button>
          <button className="splide__arrow splide__arrow--next relative z-30 text-red-600">
            <Image
              src={"/icons/right.png"}
              alt="right_arrow"
              width={30}
              height={30}
            />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default Hero;
