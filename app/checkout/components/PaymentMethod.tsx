"use client";
import Button from "@/components/button/Button";
import { useState } from "react";
import { CircleLoader } from "react-spinners";

interface PaymentMethodProps {
  loading: boolean;
}
type Selected = "card" | "cash";
const PaymentMethod = ({ loading }: PaymentMethodProps) => {
  const [selected, setSelected] = useState<Selected>("cash");

  return (
    <div className="font-sans my-[2rem]">
      <div className="my-[1rem]">
        <h2 className="lg:text-xl md:text-lg text-md font-bold text-primary my-4">
          Payment Method
        </h2>
        <p className="text-gray-1 text-base">
          All transactions are secure and encrypted.
        </p>
      </div>

      <div className="bg-light rounded-2xl px-6 py-8 font-sans">
        {/* <div className="flex gap-2 items-start">
          <input
            type="radio"
            name="paystack"
            id="paystack"
            onChange={() => setSelected("card")}
            checked={selected === "card"}
          />
          <div>
            <p className="font-bold text-base">Pay with paystack</p>
          </div>
        </div>
        <hr className="my-[1.5rem]" /> */}
        <div className="flex gap-2">
          <input
            type="radio"
            name="same_address"
            id="different_address"
            onChange={() => setSelected("cash")}
            checked={selected === "cash"}
          />
          <div>
            <p className="font-bold text-base">Cash on delivery</p>
            <p className="text-base font-regular text-gray-1">
              Pay with cash upon delivery
            </p>
          </div>
        </div>
        <hr className="my-[1.5rem]" />
        <div className="my-2">
          <Button
            variant={"filled"}
            size={"sm"}
            type={"submit"}
            classname="text-xs"
          >
            {loading ? (
              <>
                <CircleLoader size={25} color="white" />
              </>
            ) : (
              "Confirm checkout"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
