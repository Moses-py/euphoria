import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="grid place-items-center p-5 font-sans">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/icons/empty_cart.png"
          alt="empty cart image"
          width={400}
          height={400}
        />
        <div>
          <h1 className="text-primary text-2xl text-center">
            Your cart is empty and sad :(
          </h1>
          <p className="text-primary text-lg font-light text-center">
            Add something to make it happy
          </p>
        </div>
        <Link href="/shop" className="mt-[3rem]">
          <Button variant={"filled"} size={"sm"} type={"button"}>
            Continue shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
