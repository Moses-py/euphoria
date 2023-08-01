"use client";
import Image from "next/image";
import ProductSizeBox from "./Sizebox";
import Button from "@/components/button/Button";
import Benefits from "./Benefits";
import { toast } from "react-toastify";
import { useStore } from "@/store/Store";

interface ProductDetailProps {
  product: CollectionItem;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [updateCart] = useStore((state) => [state.updateCart]);

  const onAddToCart = (item: CollectionItem) => {
    try {
      updateCart(item);
      toast("Item added to cart");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="font-sans p-3 xl:p-[1.5rem]">
        {/* Navigation */}
        <div className=" hidden text-primary font-sans text-md xs:flex gap-1">
          <p className="font-light">Shop</p>
          <Image
            src={"/icons/right.png"}
            alt="right icon"
            width={20}
            height={20}
          />
          <p className="font-light">Product</p>
          <Image
            src={"/icons/right.png"}
            alt="right icon"
            width={20}
            height={20}
          />
          <p className="font-light">{product.name}</p>
        </div>
        {/* Product name */}
        <div className="my-4">
          <h1 className="font-sans xl:text-5xl md:text-3xl text-2xl font-[800] tracking-wide">
            {product.name}
          </h1>
        </div>
        {/* Rating */}
        <div className="">
          <div className="flex gap-2 items-center my-3">
            <Image
              src={"/icons/rating.png"}
              alt="rating icon"
              width={150}
              height={20}
            />
            {/* <span className="text-md text-primary">3.5</span> */}
          </div>
          {/* <div className="flex gap-2 items-center my-3">
            <Image
              src={"/icons/message.png"}
              alt="message icon"
              width={20}
              height={20}
            />
            <span className="text-md text-primary">120 comments</span>
          </div> */}
        </div>
        {/* Size */}
        <div className="my-8">
          <h3 className="md:text-xl text-lg text-primary font-[600]">
            Select size
          </h3>
          <div className="flex gap-4 my-2">
            {product.sizes.map((size, index) => {
              return <ProductSizeBox key={index} size={size} />;
            })}
          </div>
        </div>
        {/* Colors */}
        <div className="my-8">
          <div className="my-8">
            <h3 className="md:text-xl text-lg text-primary font-[600]">
              Colors available
            </h3>
            <div className="flex gap-8 my-4">
              {product.colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    className="h-8 w-8 rounded-full cursor-pointer border border-gray-3"
                    style={{ backgroundColor: color }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="my-8 flex flex-col md:flex-row gap-4">
          <Button
            onclick={() => onAddToCart(product)}
            variant={"filled"}
            size={"lg"}
            type={"button"}
            icon={
              <>
                <Image
                  src={"/icons/cart.png"}
                  alt="message icon"
                  width={30}
                  height={20}
                />
              </>
            }
          >
            Add to cart
          </Button>
          <div className="px-8 py-3 rounded-lg grid place-items-center border w-full border-gray-2">
            $ {product.price}
          </div>
        </div>
        <hr />
        {/* Benefits */}
        <div className="grid sm:grid-cols-2 gap-4 my-8">
          <Benefits icon={"payment"} text={"Secure payment"} />
          <Benefits icon={"shirt"} text={"Size and Fit"} />
          <Benefits icon={"shipping"} text={"Free shipping"} />
          <Benefits icon={"return"} text={"30-day guarantee for returns"} />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
