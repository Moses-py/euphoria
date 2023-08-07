export const isItemInArray = (
  cart: CartArray[],
  item: CartItem,
  command: Command
) => {
  let isItemFound = false;

  for (let arr of cart) {
    if (
      arr[0].id === item.id &&
      arr[0].selectedColor === item.selectedColor &&
      arr[0].selectedSize === item.selectedSize
    ) {
      switch (command) {
        case "remove":
          let index = cart.indexOf(arr);
          if (arr.length === 1) {
            cart.splice(index, 1);
          } else {
            arr.pop();
          }
          break;
        case "add":
          arr.push(item);
          isItemFound = true;
          break;
      }
      break;
    }
  }

  if (command === "add") {
    if (!isItemFound) {
      cart.push(new Array(item));
    }
  }

  return cart;
};
