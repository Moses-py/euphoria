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
        <div className="flex xs:flex-row flex-col justify-center xs:justify-between xs:items-center px-5">
          <div className="flex-1 text-light">
            <div className="flex gap-5 xs:gap-4 justify-start items-start xs:items-center">
              <Image
                src={`${cartItem!.image}.jpg`}
                alt={cartItem!.name}
                height={100}
                width={80}
                className="rounded-xl w-1/2 xs:w-fit"
              />
              <div className="flex flex-col justify-start gap-2">
                <p className="text-md xs:text-md w-full text-primary font-bold">
                  {cartItem!.name}
                </p>
                <p className="text-primary text-sm font-regular">
                  <span className="font-semibold">Color:</span>{" "}
                  {cartItem!.selectedColor}
                </p>
                <p className="text-primary text-sm font-regular">
                  <span className="font-semibold">Size:</span>{" "}
                  {cartItem!.selectedSize}
                </p>
                <p className="block lg:hidden text-primary text-sm font-regular">
                  <span className="font-semibold">Price:</span> $
                  {cartItem!.price}
                </p>
                {/* Other */}
                <ul className="flex xs:hidden flex-col gap-3 xs:gap-2 text-light text-left">
                  <li className="text-primary text-sm font-regular">
                    <span className="font-semibold">Shipping: </span>$
                    {cartItem!.shipping.toFixed(2)}
                  </li>
                  <li className="text-primary text-sm font-regular">
                    <span className="font-semibold">Subtotal:</span> $
                    {(
                      parseFloat(cartItem!.price) * item.length +
                      cartItem!.shipping
                    ).toFixed(2)}
                  </li>
                  <li className="text-primary text-sm font-regular float-left  xs:mt-0">
                    <Quantity
                      count={item.length}
                      minusOnclick={() => updateCart(cartItem!, "remove")}
                      plusOnclick={() => updateCart(cartItem!, "add")}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <ul className="xs:flex hidden lg:hidden flex-col gap-3 xs:gap-2 text-light text-center xs:text-right">
            <li className="text-primary text-sm font-regular">
              <span className="font-semibold">Shipping: </span> $
              {cartItem!.shipping.toFixed(2)}
            </li>
            <li className="text-primary text-sm font-regular">
              <span className="font-semibold">Subtotal:</span> $
              {(
                parseFloat(cartItem!.price) * item.length +
                cartItem!.shipping
              ).toFixed(2)}
            </li>
            <li className="text-primary text-sm font-regular float-left mt-[1rem] xs:mt-0">
              <Quantity
                count={item.length}
                minusOnclick={() => updateCart(cartItem!, "remove")}
                plusOnclick={() => updateCart(cartItem!, "add")}
              />
            </li>
          </ul>
          {/* Desktop */}
          <ul className="hidden lg:flex justify-between items-center list-none flex-initial lg:flex-1 gap-[1.5rem] px-5 text-light uppercase">
            <li className="text-primary text-sm font-regular">
              ${cartItem!.price}
            </li>
            <li className="text-primary text-sm font-regular">
              <Quantity
                count={item.length}
                minusOnclick={() => updateCart(cartItem!, "remove")}
                plusOnclick={() => updateCart(cartItem!, "add")}
              />
            </li>
            <li className="text-primary text-sm font-regular">
              ${cartItem!.shipping.toFixed(2)}
            </li>
            <li className="text-primary text-sm font-regular">
              $
              {(
                parseFloat(cartItem!.price) * item.length +
                cartItem!.shipping
              ).toFixed(2)}
            </li>
          </ul>
        </div>
        <div className="w-full grid place-items-start xs:place-items-end mt-3 px-5">
          <button
            onClick={() => updateCart(cartItem!, "delete")}
            className="text-sm flex gap-2 hover:ring-2 ring-gray-2 px-4 py-[0.4rem] rounded-md bg-secondary text-light transition-all ease duration-200"
          >
            <Image
              src="/icons/trash.svg"
              alt="delete icon"
              width={20}
              height={20}
            />
          </button>
        </div>
        <hr className="my-6" />
        {/* Items */}
      </div>
    </>
  );
};

export default CartItem;
