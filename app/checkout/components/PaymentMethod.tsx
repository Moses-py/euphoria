"use client";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import { useState } from "react";

type Selected = "card" | "cash" | "paypal";
const PaymentMethod = () => {
  const [selected, setSelected] = useState<Selected>("card");
  return (
    <div className="font-sans my-[2rem]">
      <div className="my-[1rem]">
        <h1 className="lg:text-2xl text-xl font-bold text-primary my-5">
          Payment Method
        </h1>
        <p className="text-gray-1 text-base">
          All transactions are secure and encrypted.
        </p>
      </div>

      <div className="bg-light rounded-2xl px-6 py-8 font-sans">
        <div className="flex gap-2 items-start">
          <input
            type="radio"
            name="credit card"
            id="credit card"
            onChange={() => setSelected("card")}
            checked={selected === "card"}
          />
          <div>
            <p className="font-bold text-base">Credit Card</p>
            <p className="text-base font-regular text-gray-1">
              We accept all major credit cards
            </p>

            {/* Card data */}
            <div
              className={`grid my-4 transition-all ease-in ${
                selected === "card" ? "grid" : "hidden"
              }`}
            >
              <Input
                label={""}
                required={false}
                placeholder={"Card number e.g xxxx xxxx xxxx xxxx"}
                type={"text"}
                variant={"input"}
                classname="ring-gray-1 mb-2"
              />
              <div className="grid md:grid-cols-2 gap-4 my-1">
                <div className="flex gap-4">
                  <Input
                    label={""}
                    required={false}
                    placeholder={"Exp. date"}
                    type={"text"}
                    variant={"input"}
                    classname="ring-gray-1"
                  />
                  <Input
                    label={""}
                    required={false}
                    placeholder={"CVV"}
                    type={"text"}
                    variant={"input"}
                    classname="ring-gray-1"
                  />
                </div>
                <Input
                  label={""}
                  required={false}
                  placeholder={"Name on card"}
                  type={"text"}
                  variant={"input"}
                  classname="ring-gray-1"
                />
              </div>
              <div className="my-2">
                <Button
                  variant={"filled"}
                  size={"sm"}
                  type={"submit"}
                  classname="text-xs"
                >
                  Pay now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-[1.5rem]" />
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
        <div className="flex gap-2 items-start">
          <input
            type="radio"
            name="paypal"
            id="same_address"
            onChange={() => setSelected("paypal")}
            checked={selected === "paypal"}
          />
          <div>
            <label htmlFor="paypal" className="font-bold text-base">
              Pay with Paypal
            </label>
            <div
              className={`my-2 ${selected === "paypal" ? "block" : "hidden"}`}
            >
              <Button
                variant={"filled"}
                size={"sm"}
                type={"submit"}
                classname="text-xs"
              >
                Pay now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
