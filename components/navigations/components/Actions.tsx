import Link from "next/link";
import ActionButton from "./ActionButton";

interface ActionProps {
  hidden: boolean;
}
const Actions = ({ hidden }: ActionProps) => {
  return (
    <div className={`${!hidden ? "hidden" : "flex"} items-center gap-1`}>
      {/* <ActionButton icon="heart" /> */}
      <Link href="/account/dashboard/orders">
        <ActionButton icon="user" />
      </Link>
      <Link href="/account/dashboard/wishlist">
        <ActionButton icon="heart" />
      </Link>
      <Link href={"/user/cart"}>
        <ActionButton icon="cart_dark" />
      </Link>
    </div>
  );
};

export default Actions;
