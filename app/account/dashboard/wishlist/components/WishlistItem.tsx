"use client";
import Button from "@/components/button/Button";
import { useStore } from "@/store/Store";
import Image from "next/image";
import { toast } from "react-toastify";

interface WishlistItemProps {
  item: ProductItemSummary;
}

const WishlistItem = ({ item }: WishlistItemProps) => {
  const [updateCart, updateWishlist] = useStore((state) => [
    state.updateCart,
    state.updateWishlist,
  ]);
  const onAddToCart = (command: Command) => {
    const cartItem: CartItem = {
      name: item.name,
      price: item.price,
      image: item.image,
      selectedColor: item.selectedColor,
      id: item.id,
      selectedSize: item.selectedSize,
      shipping: 2.0,
    };
    try {
      updateCart(cartItem, command);
      toast("Item added to cart");
      updateWishlist(item, "delete");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="font-sans">
        <div className="flex-1 flex justify-between">
          <div className="flex gap-5">
            <Image
              src={`${item.image}.jpg`}
              alt="item image"
              width={70}
              height={80}
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-base">{item.name}</p>
              <p className="font-bold text-base">
                Color:{" "}
                <span className="font-normal text-sm">
                  {item.selectedColor}
                </span>
              </p>
              <p className="font-bold text-base">
                Size:{" "}
                <span className="font-normal text-sm">{item.selectedSize}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="font-bold text-base">${item.price}</p>
            <div className="flex gap-3">
              <Button
                variant="filled"
                size="sm"
                type={"button"}
                onclick={() => onAddToCart("add")}
              >
                <Image
                  src={"/icons/plus.svg"}
                  alt="cancel button"
                  width={20}
                  height={20}
                  onClick={() => updateWishlist(item, "delete")}
                  className="cursor-pointer"
                />
              </Button>
              <Button
                variant="outline"
                size="sm"
                type={"button"}
                onclick={() => updateWishlist(item, "delete")}
              >
                <Image
                  src={"/icons/delete.png"}
                  alt="cancel button"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistItem;
