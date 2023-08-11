"use client";
import { useStore } from "@/store/Store";
import ProductSummaryItem from "./ProductSummaryItem";
import { getTotal } from "@/utils/getTotal";

const ProductSummary = () => {
  const [cart] = useStore((state) => [state.cart]);
  return (
    <>
      <aside className="w-full border border-gray-3 p-6 h-fit">
        <h1 className="font-sans text-primary lg:text-xl text-lg font-bold">
          Order Summary
        </h1>
        <hr className="my-4" />

        <div className="flex flex-col gap-6">
          {cart.map((item, index) => {
            return (
              <ProductSummaryItem
                key={index}
                item={item[index]}
                itemLength={item.length}
              />
            );
          })}
        </div>

        <div className="my-4 flex flex-col font-sans font-bold">
          <div className="flex justify-between my-4">
            <h3>
              Subtotal{" "}
              <span className="text-gray-2">({cart.length} item(s))</span>
            </h3>
            <h3>$ {getTotal(cart, "price").toFixed(2)}</h3>
          </div>
          <div className="flex justify-between my-4">
            <h3>Savings</h3>
            <h3>$ 0</h3>
          </div>
          <hr />
          <div className="flex justify-between my-4">
            <h3>Shipping</h3>
            <h3>$ {getTotal(cart, "shipping").toFixed(2)}</h3>
          </div>
          <hr />
          <div className="flex justify-between my-4">
            <h3>Total </h3>
            <h3>
              $
              {(getTotal(cart, "price") + getTotal(cart, "shipping")).toFixed(
                2
              )}
            </h3>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductSummary;
