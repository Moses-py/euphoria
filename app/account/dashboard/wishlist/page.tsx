import Button from "@/components/button/Button";
import H2 from "@/components/typography/H2";
import P from "@/components/typography/P";
import Image from "next/image";
import Link from "next/link";

const Wishlist = () => {
  return (
    <div className="grid place-items-center text-center flex-1 p-5">
      <div className="flex flex-col justify-center items-center gap-6">
        <Image
          src="/icons/wish_icon.png"
          alt="wishlist icon"
          width={100}
          height={100}
        />
        <H2>Your wishlist is empty.</H2>
        <P>
          You don’t have any products in the wishlist yet. You will find a lot
          of interesting products on our Shop page.
        </P>
        <Link href={"/shop"}>
          <Button variant="filled" size="sm" type="button">
            Continue shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
