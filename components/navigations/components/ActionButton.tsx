"use client";
import { useStore } from "@/store/Store";
import Image from "next/image";

type Props = {
  icon: string;
  onclick?: () => void;
};

const ActionButton = ({ icon, onclick }: Props) => {
  const [cart] = useStore((state) => [state.cart]);
  return (
    <>
      <div
        className="p-3 rounded-md cursor-pointer hover:bg-gray-2 transition-all ease-in"
        onClick={onclick}
      >
        {icon === "cart_dark" ? (
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
        ) : (
          <Image
            src={`/icons/${icon}.png`}
            alt={`${icon}-icon`}
            height={20}
            width={20}
          />
        )}
      </div>
    </>
  );
};

export default ActionButton;
