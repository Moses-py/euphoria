"use client";
import NavIndicator from "@/components/nav_indicator/NavIndicator";
import Navbar from "@/components/navigations/Navbar";
import Title from "@/components/title/Title";
import BillingForm from "./components/BillingForm";
import Button from "@/components/button/Button";
import ProductSummary from "./components/ProductSummary";
import ShippingMethodOption from "./components/ShippingMethodOption";
import PaymentMethod from "./components/PaymentMethod";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { useStore } from "@/store/Store";
import generateRandomString from "@/utils/randomStringGenerator";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [user, cart, clearCart, setOrders] = useStore((state) => [
    state.user,
    state.cart,
    state.clearCart,
    state.setOrders,
  ]);
  const router = useRouter();
  const defaultUserAddress = user?.address?.find(
    (address) => (address.role = "default")
  );
  const checkoutOrder = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const address = `${defaultUserAddress?.addressData.streetNumber}, ${defaultUserAddress?.addressData.streetname}, ${defaultUserAddress?.addressData.city}, ${defaultUserAddress?.addressData.state}, ${defaultUserAddress?.addressData.country}`;
    const orderDetails: Orders = {
      orderId: generateRandomString(30),
      orderDate: new Date(),
      deliveryDate: new Date(),
      status: "processing",
      paymentMethod: "Cash on delivery",
      orderItems: cart,
      orderAddress: address,
      orderAuthorId: user.userId,
    };

    try {
      setOrders(orderDetails);
      setTimeout(() => {
        setLoading(false);
        router.push("/orderConfirmed");
        clearCart();
      }, 2500);
    } catch (error) {}
  };
  return (
    <>
      <Navbar />
      <div className="xl:container my-[1rem] p-5">
        <NavIndicator indicators={["Home", "My Account", "Checkout"]} />
      </div>
      <section className="xl:container font-sans px-5">
        <Title>Check Out</Title>
        <h2 className="lg:text-xl md:text-lg text-md font-bold text-primary my-4">
          Shipping details
        </h2>
      </section>

      <form
        className="xl:container grid lg:grid-cols-2 gap-4 px-5 mt-[2rem]"
        onSubmit={(e: FormEvent<HTMLFormElement>) => checkoutOrder(e)}
      >
        <div>
          <BillingForm />
          <div className="flex flex-col gap-6 my-[2rem]">
            <Link href={"/account/dashboard/info/addressupdate"}>
              <Button
                variant={"filled"}
                size={"sm"}
                type={"button"}
                classname="text-xs"
              >
                Use a different address
              </Button>
            </Link>
          </div>
          <hr className="my-[2rem]" />
          {/* <ShoppingAddressOption /> */}
          <ShippingMethodOption />
          <PaymentMethod loading={loading} />
        </div>
        <ProductSummary />
      </form>
      <Footer />
    </>
  );
};

export default Checkout;
