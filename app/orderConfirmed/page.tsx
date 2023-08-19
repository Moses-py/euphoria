"use client";
import Button from "@/components/button/Button";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navigations/Navbar";
import { useStore } from "@/store/Store";
import Image from "next/image";
import Link from "next/link";
import { useEffectOnce } from "usehooks-ts";

const OrderConfirmed = () => {
  const [orders, user] = useStore((state) => [state.orders, state.user]);
  useEffectOnce(() => {
    console.log(orders);
    console.log(user);
  });
  return (
    <div>
      <Navbar />
      <div className="container grid place-items-center">
        <Image
          src={"/icons/confirmed.png"}
          alt="order-confimed image"
          height={967}
          width={726}
        />
        <Link href={"/shop"}>
          <Button variant={"filled"} size={"sm"} type={"button"}>
            Continue shopping
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default OrderConfirmed;
