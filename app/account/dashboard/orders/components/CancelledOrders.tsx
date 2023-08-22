"use client";

import { useStore } from "@/store/Store";
import OrderItem from "./OrderItem";
import P from "@/components/typography/P";
import { useEffect, useState } from "react";
import Loading from "@/components/loading/Loader";

const CancelledOrders = () => {
  const [orders] = useStore((state) => [state.orders]);
  const [cancelledOrders, setCancelledOrders] = useState<
    Orders[] | undefined
  >();

  useEffect(() => {
    const cancelled = orders.filter((order) => {
      return order.status === "Cancelled";
    });

    setCancelledOrders(cancelled);
  }, [orders]);
  return (
    <>
      {cancelledOrders === undefined ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {orders.length > 0 ? (
            <>
              <div className="flex flex-col gap-2">
                {cancelledOrders?.map((order, index) => {
                  return <OrderItem key={index} order={order} />;
                })}
              </div>
            </>
          ) : (
            <>
              <div className="w-full h-full grid place-items-center">
                <P>No Cancelled orders</P>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CancelledOrders;
