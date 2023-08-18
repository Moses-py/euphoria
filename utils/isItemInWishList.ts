export const updateWishlistCollection = (
  wishlist: ProductItemSummary[],
  item: ProductItemSummary,
  command: WishlistCommand
) => {
  let newWishlist: ProductItemSummary[] = [];
  switch (command) {
    case "add":
      wishlist.push(item);
      newWishlist = [...wishlist];
      break;
    case "delete":
      let itemIndex = wishlist.indexOf(item);
      wishlist.splice(itemIndex, 1);
      newWishlist = [...wishlist];
      break;
  }

  return newWishlist;
};

export const isItemInWishlist = (
  list: ProductItemSummary[],
  item: ProductItemSummary
) => {
  return list.includes(item);
};
