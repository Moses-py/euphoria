"use client";
import Button from "@/components/button/Button";
import CartItem from "./CartItem";
import Link from "next/link";
import { getTotal } from "@/utils/getTotal";

interface CartTableProps {
  cart: CartArray[];
}
const CartTable = ({ cart }: CartTableProps) => {
  return (
    <div className="lg:container font-sans">
      {/* Heading */}
      <div className="flex justify-between items-center bg-primary py-6 px-5 lg:px-12">
        <div className="lg:flex-1 flex-none text-light uppercase">
          <p>Product Details</p>
        </div>
        <ul className="hidden lg:flex justify-between list-none flex-initial lg:flex-1 gap-[1.5rem] text-light uppercase">
          <li>Price</li>
          <li>Quantity</li>
          <li>Shipping</li>
          <li>Subtotal</li>
        </ul>
      </div>
      {/* Items */}
      <div className="flex flex-col gap-6 my-5">
        {cart.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
      </div>
      {/* Total */}
      <div className="bg-light w-full my-5 py-[1rem] rounded-lg font-sans">
        <div className="flex flex-col-reverse gap-[3rem] md:gap-0 md:flex-row md:justify-between md:items-center p-[2rem]">
          <div className="flex flex-col gap-3">
            <h1 className="lg:text-2xl text md:text-xl text-lg text-primary">
              Discount Codes
            </h1>
            <p className="text-gray-1 font-light text-lg">
              Enter your coupon code if you have one
            </p>
            <div className="flex items-center w-full">
              <input
                type="text"
                className="rounded-tl-lg w-full rounded-bl-lg ring-1 ring-gray-2 p-3 focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none bg-secondary px-5 py-3 text-light">
                Apply
              </button>
            </div>
            <Link href="/shop" className="mt-[2rem] w-full">
              <button className="rounded-md px-5 py-2 ring-1 ring-gray-2 hover:bg-secondary transition-all ease-in duration-200 hover:text-light font-light">
                Continue shopping
              </button>
            </Link>
          </div>
          {/* Total */}
          <div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-lg font-light text-gray-1">Total</p>
                <p className="text-lg font-light text-gray-1">Shipping</p>
                <p className="text-lg font-semibold mt-6">Grand Total</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-lg font-light text-gray-1">
                  ${getTotal(cart, "price").toFixed(2)}
                </p>
                <p className="text-lg font-light text-gray-1">
                  ${getTotal(cart, "shipping").toFixed(2)}
                </p>
                <p className="text-lg font-semibold mt-6">
                  $
                  {(
                    getTotal(cart, "price") + getTotal(cart, "shipping")
                  ).toFixed(2)}
                </p>
              </div>
            </div>
            <hr className="border-gray-2 my-8 w-full" />
            <Link href={"/checkout"}>
              <Button
                variant={"filled"}
                size={"lg"}
                type={"button"}
                classname="py-1"
              >
                Proceed to checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
