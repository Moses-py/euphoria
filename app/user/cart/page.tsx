"use client";
import Image from "next/image";
import Navbar from "@/components/navigations/Navbar";
import Link from "next/link";
import CartTable from "./components/CartTable";
import { useStore } from "@/store/Store";

const Cart = () => {
  const [cart] = useStore((state) => [state.cart]);
  return (
    <div>
      <Navbar />
      <div className="container my-5 p-5">
        <div className=" text-gray-1 font-sans text-md flex gap-1">
          <p className="font-light">Home</p>
          <Image
            src={"/icons/right.png"}
            alt="right icon"
            width={20}
            height={10}
          />
          <p className="font-semibold">Add to Cart</p>
        </div>
        <div className="font-sans text-lg my-10 text-gray-1">
          <p>
            Please fill in the fields below and click place order to complete
            your purchase!
          </p>
          <p>
            Already registered?{" "}
            <Link href="/login" className="text-secondary">
              Please login here
            </Link>{" "}
          </p>
        </div>
      </div>

      <div className="w-full">
        <CartTable cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
