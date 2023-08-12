import Title from "@/components/title/Title";

const ShoppingAddressOption = () => {
  return (
    <div className="font-sans my-[2rem]">
      <div className="my-[1rem]">
        <h1 className="lg:text-2xl text-xl font-bold text-primary my-5">
          Shipping address
        </h1>
        <p className="text-gray-1 text-base">
          Select the address that matches your card or payment method.
        </p>
      </div>

      <div className="bg-light rounded-2xl px-6 py-8 font-sans">
        <div className="flex gap-2">
          <input type="radio" name="same_address" id="same_address" />
          <label htmlFor="same_address" className="font-bold text-base">
            Same as Billing address
          </label>
        </div>
        <hr className="my-[1.5rem]" />
        <div className="flex gap-2">
          <input type="radio" name="same_address" id="different_address" />
          <label htmlFor="different_address" className="font-bold text-base">
            Use a different shipping address
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShoppingAddressOption;
