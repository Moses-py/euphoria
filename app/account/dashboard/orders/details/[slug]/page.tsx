"use client";
import { useStore } from "@/store/Store";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import Image from "next/image";
import Link from "next/link";
import formatCustomDate from "@/utils/formatDate";
import { getOrdersTotal } from "@/utils/getOrdersTotal";
import OrderList from "./components/OrderList";
import OrderTimeline from "./components/Timeline";

type Props = {};

const OrderDetails = ({ params }: { params: { slug: string } }) => {
  const [orders, cancelOrder] = useStore((state) => [
    state.orders,
    state.cancelOrder,
  ]);
  const [orderTitle, setOrderTitle] = useState<Orders | undefined>();

  useEffect(() => {
    const { slug } = params;
    const singleOrder = orders.find((order) => {
      return order.orderId === slug;
    });

    setOrderTitle(singleOrder);
  }, [orders, params]);
  return (
    <>
      {orderTitle === undefined ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="flex-1 w-full font-sans p-3">
          <div className="flex gap-5 items-center">
            <Link href={"/account/dashboard/orders"}>
              <Image
                src="/icons/left.svg"
                alt="left icon"
                height={20}
                width={20}
              />
            </Link>
            <h2 className="md:text-2xl sm:text-xl text-lg text-primary font-[600] font-serif tracking-wide ">
              Order details
            </h2>
          </div>
          <div className="flex justify-between items-center mt-[2rem] bg-light rounded-xl p-4 md:p-[2rem]">
            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-base text-primary font-bold">
                Order ID: <br />
                <span className="text-gray-1 font-semibold text-xs">
                  #{orderTitle.orderId}
                </span>
              </p>
              <p className="text-sm md:text-base text-primary font-bold">
                Placed on <br />
                <span className="text-gray-1 font-semibold text-xs">
                  {formatCustomDate(orderTitle.orderDate, false)}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-base text-primary font-bold">
                Total: <br />
                <span className="text-gray-1 font-semibold text-xs">
                  $ {getOrdersTotal(orderTitle!.orderItems).toFixed(2)}
                </span>
              </p>
              <p className="text-sm md:text-base text-primary font-bold">
                Status: <br />
                <span className="text-gray-1 font-semibold text-xs">
                  {orderTitle.status}
                </span>
              </p>
              <button
                className="text-xs text-red-700 font-semibold"
                onClick={() => cancelOrder(orderTitle.orderId)}
              >
                Cancel Order
              </button>
            </div>
          </div>
          <div className="my-5">
            <OrderTimeline />
          </div>
          <div className="my-6">
            <div className="roundex-xl px-6 py-3 bg-light flex gap-5">
              <p className="text-sm text-gray-1 ">
                {formatCustomDate(new Date(), true)}
              </p>
              <p className="text-sm text-primary ">
                Your order has been successfully verified and is being processed
              </p>
            </div>
          </div>
          <div className="mt-4">
            <OrderList orders={orderTitle.orderItems} />
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
