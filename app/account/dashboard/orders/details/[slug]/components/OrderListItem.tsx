import Image from "next/image";
interface OrderListItemProps {
  order: CartItem;
  quantity: number;
}

const OrderListItem = ({ order, quantity }: OrderListItemProps) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-1 gap-2 items-stretch ">
          <Image
            src={`${order.image}.jpg`}
            alt=""
            width={70}
            height={70}
            className="rounded-md"
          />
          <div className="flex flex-col justify-between gap-1">
            <p className="text-sm md:text-base text-primary font-bold">
              {order.name}
            </p>
            <p className="text-sm text-primary font-bold">
              Color:{" "}
              <span className="text-gray-1 font-semibold text-sm">
                {order.selectedColor}
              </span>
            </p>
            <p className="text-sm text-primary font-bold">
              Size:{" "}
              <span className="text-gray-1 font-semibold text-sm">
                {order.selectedSize}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-primary font-bold">
            Quantity:{" "}
            <span className="text-gray-1 font-semibold text-sm">
              {quantity}
            </span>
          </p>
          <p className="text-sm text-primary font-bold">
            Price:{" "}
            <span className="text-gray-1 font-semibold text-sm">
              $ {order.price}
            </span>
          </p>
        </div>
      </div>

      <hr className="my-[1rem]" />
    </>
  );
};
export default OrderListItem;
