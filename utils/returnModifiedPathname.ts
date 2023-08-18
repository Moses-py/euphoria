function returnModifiedPathname(path: string) {
  let modifiedPath = "";
  switch (path) {
    case "/account/dashboard/orders":
      modifiedPath = "My Orders";
      break;
    case "/account/dashboard/wishlist":
      modifiedPath = "My Wishlist";
      break;
    case "/account/dashboard/info":
      modifiedPath = "My Info";
      break;
    case "/account/dashboard/info/addressupdate":
      modifiedPath = "Update address";
  }
  return modifiedPath;
}

export default returnModifiedPathname;
