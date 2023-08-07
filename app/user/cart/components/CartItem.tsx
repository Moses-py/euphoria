"use client";

import Image from "next/image";

interface CartItemProps {
  item: CartItem[];
}
const CartItem = ({ item }: CartItemProps) => {
  const cartItem = item.at(0);
  return (
    <>
      <div className="lg:container font-sans bg-light">
        {/* Heading */}
        <div className="flex justify-between items-center py-6 px-5 lg:px-12">
          <div className="lg:flex-1 flex-none text-light">
            <div className="flex gap-3">
              <Image
                src={`${cartItem!.image}.jpg`}
                alt={cartItem!.name}
                height={120}
                width={80}
                className="rounded-xl"
              />
              <div className="flex flex-col gap-2">
                <p className="md:text-lg text-md w-4/5 text-primary font-bold leading-none">
                  {cartItem!.name}
                </p>
                <p className="text-gray-1 text-sm font-light">
                  Color: {cartItem!.selectedColor}
                </p>
                <p className="text-gray-1 text-sm font-light">
                  Size: {cartItem!.selectedSize}
                </p>
                <p className="block lg:hidden text-gray-1 text-sm font-light">
                  Price: ${cartItem!.price}
                </p>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <ul className="flex lg:hidden flex-col gap-2 text-light text-right">
            <li className="text-gray-1 text-sm font-light">
              <span className="font-semibold">Quantity:</span> {item.length}
            </li>
            <li className="text-gray-1 text-sm font-light">
              <span className="font-semibold">Shipping: FREE</span>
            </li>
            <li className="text-gray-1 text-sm font-light">
              <span className="font-semibold">Subtotal:</span> $
              {cartItem!.price}
            </li>
            <li className="text-gray-1 text-sm font-light">
              <button>
                <Image
                  src="/icons/deletecon.png"
                  alt="delete icon"
                  width={18}
                  height={18}
                />
              </button>
            </li>
          </ul>
          {/* Desktop */}
          <ul className="hidden lg:flex justify-between list-none flex-initial lg:flex-1 gap-[1.5rem] text-light uppercase">
            <li className="text-gray-1 text-sm font-light">
              {cartItem!.price}
            </li>
            <li className="text-gray-1 text-sm font-light">{item.length}</li>
            <li className="text-gray-1 text-sm font-light">FREE</li>
            <li className="text-gray-1 text-sm font-light">
              ${cartItem!.price}
            </li>
            <li className="text-gray-1 text-sm font-light">
              <button>
                <Image
                  src="/icons/deletecon.png"
                  alt="delete icon"
                  width={20}
                  height={20}
                />
              </button>
            </li>
          </ul>
        </div>
        {/* Items */}
      </div>
    </>
  );
};

export default CartItem;
