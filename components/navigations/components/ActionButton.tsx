"use client";
import { useStore } from "@/store/Store";
import Image from "next/image";

type Props = {
  icon: string;
  onclick?: () => void;
};

const ActionButton = ({ icon, onclick }: Props) => {
  const [cart, wishlist] = useStore((state) => [state.cart, state.wishlist]);
  const returnIconImage = (icon: string) => {
    if (icon === "cart_dark") {
      return (
        <>
          <div className="relative">
            <Image
              src={`/icons/${icon}.png`}
              alt={`${icon}-icon`}
              height={20}
              width={20}
            />
            <span className="text-[14px] text-gray-1 absolute top-[-10px] right-[-5px]">
              {cart.length}
            </span>
          </div>
        </>
      );
    } else if (icon === "heart") {
      return (
        <div className="relative">
          <Image
            src={`/icons/${icon}.png`}
            alt={`${icon}-icon`}
            height={20}
            width={20}
          />
          <span className="text-[14px] text-gray-1 absolute top-[-10px] right-[-5px]">
            {wishlist.length}
          </span>
        </div>
      );
    } else if (icon === "user") {
      return (
        <div className="relative">
          <Image
            src={`/icons/${icon}.png`}
            alt={`${icon}-icon`}
            height={20}
            width={20}
          />
          <span className="absolute top-[-5px] right-[-2px] h-2 w-2 rounded-full border-gray-1 bg-green-600" />
        </div>
      );
    } else {
      return (
        <Image
          src={`/icons/${icon}.png`}
          alt={`${icon}-icon`}
          height={20}
          width={20}
        />
      );
    }
  };
  return (
    <>
      <div
        className="p-3 rounded-md cursor-pointer hover:bg-gray-2 transition-all ease-in"
        onClick={onclick}
      >
        {returnIconImage(icon)}
      </div>
    </>
  );
};

export default ActionButton;
