import { useRouter } from "next/navigation";
import ActionButton from "./ActionButton";

interface ActionProps {
  hidden: boolean;
}
const Actions = ({ hidden }: ActionProps) => {
  const router = useRouter();
  return (
    <div className={`${!hidden ? "hidden" : "flex"} items-center gap-2`}>
      {/* <ActionButton icon="heart" /> */}
      <ActionButton icon="user" />
      <ActionButton
        icon="cart_dark"
        onclick={() => router.push("/user/cart")}
      />
    </div>
  );
};

export default Actions;
