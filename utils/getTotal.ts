export const getTotal = (cart: CartArray[], command: GetTotalCommand) => {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    for (let item of cart[i]) {
      arr.push(item);
    }
    if (command === "shipping") {
      sum += cart[i][0].shipping;
    }
  }

  if (command === "price") {
    for (let item of arr) {
      sum += parseFloat(item.price);
    }
  }

  return sum;
};
