export const getOrdersTotal = (orders: CartArray[]) => {
  let sum = 0;
  for (let item of orders) {
    for (let order of item) {
      sum += parseFloat(order.price);
    }
    sum += item[0].shipping;
  }

  return sum;
};
