"use client";
import Image from "next/image";
import ProductSizeBox from "./Sizebox";
import Button from "@/components/button/Button";
import Benefits from "./Benefits";
import { toast } from "react-toastify";
import { useStore } from "@/store/Store";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import { CircleLoader } from "react-spinners";
import NavIndicator from "@/components/nav_indicator/NavIndicator";
import { isItemInWishlist } from "@/utils/isItemInWishList";
import generateRandomString from "@/utils/randomStringGenerator";
import { isItemInCartArray } from "@/utils/isItemInArray";

interface ProductDetailProps {
  product: CollectionItem;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [updateCart, updateWishlist, wishlist, cart] = useStore((state) => [
    state.updateCart,
    state.updateWishlist,
    state.wishlist,
    state.cart,
  ]);
  const [selectColor, setSelectColor] = useState(product.colors[0]);
  const [selectSize, setSelectSize] = useState(product.sizes[0]);
  const [count, setCount] = useState(1);
  const [openCounter, setOpenCounter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState<boolean | undefined>();
  const [isItemInCart, setIsItemInCart] = useState<boolean | undefined>();
  useEffect(() => {
    const productItem: ProductItemSummary = {
      name: product.name,
      price: product.price,
      image: product.image,
      selectedColor: selectColor,
      sn: product.sn,
      selectedSize: selectSize,
    };
    const cartItem: CartItem = {
      name: product.name,
      price: product.price,
      image: product.image,
      selectedColor: selectColor,
      sn: product.sn,
      selectedSize: selectSize,
      shipping: 2.0,
      id: product.id,
    };
    setIsItemInCart(isItemInCartArray(cart, cartItem));
    setIsInWishlist(isItemInWishlist(wishlist, productItem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectColor, selectSize]);

  const onAddToCart = (item: CollectionItem, command: Command) => {
    const cartItem: CartItem = {
      name: item.name,
      price: item.price,
      image: item.image,
      selectedColor: selectColor,
      sn: item.sn,
      selectedSize: selectSize,
      shipping: 2.0,
      id: item.id,
    };
    try {
      setLoading(true);

      setTimeout(() => {
        updateCart(cartItem, command);
        toast("Item added to cart");
        setLoading(false);
        setOpenCounter(true);
      }, 1000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onUpdateWishlist = (item: CollectionItem, command: WishlistCommand) => {
    const wishlistItem: ProductItemSummary = {
      name: item.name,
      price: item.price,
      image: item.image,
      selectedColor: selectColor,
      sn: item.sn,
      selectedSize: selectSize,
    };

    try {
      updateWishlist(wishlistItem, command);
      if (command === "add") {
        setIsInWishlist(isItemInWishlist(wishlist, wishlistItem));
        toast("Item added to wishlist");
      } else {
        setIsInWishlist(false);
        toast("Item removed from wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="font-sans p-3 xl:p-[1.5rem]">
        {/* Navigation */}
        <div className="hidden xs:block">
          <NavIndicator
            indicators={["Home", "Shop", "Product", product.name]}
          />
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
          </div>
        </div>
        {/* Size */}
        <div className="my-8">
          <h3 className="md:text-xl text-lg text-primary font-[600]">
            Select size
          </h3>
          <div className="flex gap-4 my-2">
            {product.sizes.map((size, index) => {
              return (
                <ProductSizeBox
                  key={index}
                  size={size}
                  onclick={() => {
                    setSelectSize(size);
                    setOpenCounter(false);
                    setCount(1);
                  }}
                />
              );
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
                    onClick={() => {
                      setSelectColor(color);
                      setOpenCounter(false);
                      setCount(1);
                    }}
                    key={index}
                    className="h-8 w-8 rounded-full cursor-pointer border border-gray-3"
                    style={{ backgroundColor: color }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* Select options */}
        <div className="my-2">
          <h3 className="md:text-xl text-lg text-primary font-[600]">
            Selected options:
          </h3>
          <div>
            <p className="text-md text-gray-1 font-sans">
              {selectSize === product.sizes[0]
                ? `Size: ${product.sizes[0]} (default)`
                : `Size: ${selectSize}`}
            </p>
            <p className="text-md text-gray-1 font-sans">
              {selectColor === product.colors[0]
                ? `Color: ${product.colors[0]} (default)`
                : `Color: ${selectColor}`}
            </p>
          </div>
        </div>
        {/* CTA */}
        <div className="my-4 flex flex-col md:flex-row gap-4">
          {openCounter || isItemInCart ? (
            <Counter
              minusOnclick={() => {
                setCount((prev) => prev - 1);
                onAddToCart(product, "remove");
              }}
              plusOnclick={() => {
                setCount((prev) => prev + 1);
                onAddToCart(product, "add");
              }}
              count={count}
            />
          ) : (
            <>
              <Button
                onclick={() => onAddToCart(product, "add")}
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
                {loading ? (
                  <CircleLoader color="white" size={20} />
                ) : (
                  "Add to cart"
                )}
              </Button>
            </>
          )}

          <Button
            variant={"outline"}
            size={"lg"}
            type={"button"}
            icon={
              <Image
                src={"/icons/heart.svg"}
                alt={"heart icon"}
                width={20}
                height={20}
              />
            }
            classname="border-gray-2"
            onclick={
              isInWishlist
                ? () => onUpdateWishlist(product, "delete")
                : () => onUpdateWishlist(product, "add")
            }
          >
            {isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          </Button>
        </div>
        <div className="px-8 py-3 rounded-lg grid place-items-center border w-full border-gray-2">
          $ {product.price}
        </div>

        <hr className="my-3" />
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
