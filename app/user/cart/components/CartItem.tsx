"use client";

import Image from "next/image";
import Quantity from "./Quantity";
import { useStore } from "@/store/Store";
import Button from "@/components/button/Button";

interface CartItemProps {
  item: CartItem[];
}
const CartItem = ({ item }: CartItemProps) => {
  const [updateCart] = useStore((state) => [state.updateCart]);
  const cartItem = item.at(0);
  return (
    <>
      <div className="lg:container font-sans">
        {/* Heading */}
        <div className="flex justify-between items-center py-6 px-5">
          <div className="lg:flex-1 text-light">
            <div className="flex gap-2 xs:gap-4">
              <Image
                src={`${cartItem!.image}.jpg`}
                alt={cartItem!.name}
                height={120}
                width={80}
                className="rounded-xl"
              />
              <div className="flex flex-col gap-2 xs:gap-4">
                <p className="text-lg xs:w-full w-4/5 text-primary font-bold leading-none">
                  {cartItem!.name}
                </p>
                <p className="text-primary text-base font-light">
                  Color: {cartItem!.selectedColor}
                </p>
                <p className="text-primary text-base font-light">
                  Size: {cartItem!.selectedSize}
                </p>
                <p className="block lg:hidden text-primary text-base font-light">
                  Price: ${cartItem!.price}
                </p>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <ul className="flex lg:hidden flex-col gap-2 xs:gap-4 text-light text-right">
            <li className="text-primary text-base font-light">
              <Quantity
                count={item.length}
                minusOnclick={() => updateCart(cartItem!, "remove")}
                plusOnclick={() => updateCart(cartItem!, "add")}
              />
            </li>
            <li className="text-primary text-base font-light">
              <span className="font-semibold">Shipping: </span> <br />$
              {cartItem!.shipping.toFixed(2)}
            </li>
            <li className="text-primary text-base font-light">
              <span className="font-semibold">Subtotal:</span> $
              {cartItem!.price}
            </li>
          </ul>
          {/* Desktop */}
          <ul className="hidden lg:flex justify-between items-center list-none flex-initial lg:flex-1 gap-[1.5rem] px-5 text-light uppercase">
            <li className="text-primary text-base font-light">
              ${cartItem!.price}
            </li>
            <li className="text-primary text-base font-light">
              <Quantity
                count={item.length}
                minusOnclick={() => updateCart(cartItem!, "remove")}
                plusOnclick={() => updateCart(cartItem!, "add")}
              />
            </li>
            <li className="text-primary text-base font-light">
              ${cartItem!.shipping.toFixed(2)}
            </li>
            <li className="text-primary text-base font-light">
              $
              {(
                parseFloat(cartItem!.price) * item.length +
                cartItem!.shipping
              ).toFixed(2)}
            </li>
          </ul>
        </div>
        <div className="w-full grid place-items-end my-1 px-5">
          <button
            onClick={() => updateCart(cartItem!, "delete")}
            className="text-sm flex gap-2 hover:ring-2 ring-gray-2 px-4 py-[0.4rem] rounded-md bg-secondary text-light transition-all ease duration-200"
          >
            <Image
              src="/icons/delete.png"
              alt="delete icon"
              width={20}
              height={20}
            />
          </button>
        </div>
        {/* Items */}
      </div>
    </>
  );
};

export default CartItem;
