"use client";
import Image from "next/image";
import Slider from "./Slider";
import ProductDetail from "./ProductDetail";

interface ImageBoxProps {
  currentItem: CollectionItem | undefined;
}

const ImageBox = ({ currentItem }: ImageBoxProps) => {
  return (
    <>
      <div className="sm:container p-3 xl:p-[1.5rem]">
        {currentItem && (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="flex lg:justify-end gap-2 w-full">
              <div className="h-full flex items-center justify-center">
                <Slider centerSlide={currentItem} />
              </div>
              <div className="border h-full w-full border-gray-3 rounded-3xl">
                <Image
                  src={`${currentItem!.image}.jpg`}
                  alt={currentItem!.name}
                  width={500}
                  height={750}
                  className="w-full h-full rounded-3xl"
                />
              </div>
            </div>
            {/* Data */}
            <div className="w-full h-full">
              <ProductDetail product={currentItem} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageBox;
