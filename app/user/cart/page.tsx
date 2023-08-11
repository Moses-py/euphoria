"use client";
import Image from "next/image";
import Navbar from "@/components/navigations/Navbar";
import Link from "next/link";
import CartTable from "./components/CartTable";
import { useStore } from "@/store/Store";
import EmptyCart from "./components/EmptyCart";
import Footer from "@/components/footer/Footer";
import NavIndicator from "@/components/nav_indicator/NavIndicator";

const Cart = () => {
  const [cart] = useStore((state) => [state.cart]);
  return (
    <div>
      <Navbar />
      <div className="container my-5 p-5">
        <NavIndicator indicators={["Home", "Cart"]} />
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
        {cart.length < 1 ? <EmptyCart /> : <CartTable cart={cart} />}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
