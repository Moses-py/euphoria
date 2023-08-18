import WishlistItem from "./WishlistItem";

interface WishlistProps {
  wishlist: ProductItemSummary[];
}
const Wishlists = ({ wishlist }: WishlistProps) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {wishlist.map((item, index) => {
          return (
            <>
              <WishlistItem key={index} item={item} />
              <hr className="my-2" />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Wishlists;
