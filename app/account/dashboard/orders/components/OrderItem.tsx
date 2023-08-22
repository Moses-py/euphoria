import Button from "@/components/button/Button";
import formatCustomDate from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";

interface OrderItemProps {
  order: Orders;
}
const OrderItem = ({ order }: OrderItemProps) => {
  return (
    <>
      <div className="w-full font-normal font-sans">
        <div className="flex justify-between items-start bg-light rounded-xl p-4 md:px-8 md:py-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base text-primary font-bold">
              Order ID: <br />
              <span className="text-gray-1 font-semibold text-xs">
                #{order.orderId}
              </span>
            </p>
            <p className="text-sm md:text-base text-primary font-bold">
              Order date: <br />
              <span className="text-gray-1 font-semibold text-xs">
                {formatCustomDate(order.orderDate, false)}
              </span>
            </p>
            <p className="text-sm md:text-base text-primary font-bold">
              Delivery date: <br />
              <span className="text-gray-1 font-semibold text-xs">
                {formatCustomDate(order.deliveryDate, false)}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base text-primary font-bold">
              Order status: <br />
              <span className="text-gray-1 font-semibold text-xs">
                {order.status}
              </span>
            </p>
            <p className="text-sm md:text-base text-primary font-bold">
              Payment method: <br />
              <span className="text-gray-1 font-semibold text-xs">
                {order.paymentMethod}
              </span>
            </p>
            <Link href={`/account/dashboard/orders/details/${order.orderId}`}>
              <Button variant={"filled"} size={"sm"} type={"button"}>
                View details
              </Button>
            </Link>
          </div>
        </div>
        {/* Order itwms */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
          {order.orderItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between w-full items-center my-5"
              >
                <div className="flex flex-1 gap-2 items-stretch ">
                  <Image
                    src={`${item[0].image}.jpg`}
                    alt=""
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="flex flex-col justify-between gap-1">
                    <p className="text-sm md:text-lg text-primary font-bold">
                      {item[0].name}
                    </p>
                    <p className="text-sm md:text-base text-primary font-bold">
                      Color:{" "}
                      <span className="text-gray-1 font-semibold text-sm">
                        {item[0].selectedColor}
                      </span>
                    </p>
                    <p className="text-sm md:text-base text-primary font-bold">
                      Quantity:{" "}
                      <span className="text-gray-1 font-semibold text-sm">
                        {item.length}
                      </span>
                    </p>
                    <p className="text-sm md:text-base text-primary font-bold">
                      Total:{" "}
                      <span className="text-gray-1 font-semibold text-sm">
                        ${(parseInt(item[0].price) * item.length).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default OrderItem;
