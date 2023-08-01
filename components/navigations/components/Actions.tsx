import ActionButton from "./ActionButton";

interface ActionProps {
  hidden: boolean;
}
const Actions = ({ hidden }: ActionProps) => {
  return (
    <div className={`${!hidden ? "hidden" : "flex"} items-center gap-2`}>
      {/* <ActionButton icon="heart" /> */}
      <ActionButton icon="user" />
      <ActionButton icon="cart_dark" />
    </div>
  );
};

export default Actions;
