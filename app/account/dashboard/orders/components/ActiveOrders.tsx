"use client";

import { useStore } from "@/store/Store";
import OrderItem from "./OrderItem";
import P from "@/components/typography/P";

const ActiveOrders = () => {
  const [orders] = useStore((state) => [state.orders]);
  return (
    <>
      {orders.length > 0 ? (
        <>
          {" "}
          <div className="flex flex-col gap-2">
            {orders.map((order, index) => {
              return <OrderItem key={index} order={order} />;
            })}
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-full grid place-items-center">
            <P>No active orders</P>
          </div>
        </>
      )}
    </>
  );
};

export default ActiveOrders;
