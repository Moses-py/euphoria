import OrderListItem from "./OrderListItem";

interface OrderListProps {
  orders: CartArray[];
}
const OrderList = ({ orders }: OrderListProps) => {
  return (
    <>
      <div className="bg-light rounded-xl p-4 md:p-[2rem]">
        <div className="flex flex-col gap-6">
          {orders.map((order, index) => {
            return (
              <OrderListItem
                key={index}
                order={order[0]}
                quantity={order.length}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OrderList;
