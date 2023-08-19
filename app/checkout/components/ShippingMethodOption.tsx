import Title from "@/components/title/Title";

const ShippingMethodOption = () => {
  return (
    <div className="font-sans my-[4rem]">
      <div className="my-[1rem]">
        <h2 className="lg:text-xl md:text-lg text-md font-bold text-primary my-4">
          Shipping Method
        </h2>
      </div>

      <div className="bg-light rounded-2xl px-6 py-8 font-sans">
        <p className="font-bold text-base">Arrives by Monday, June 7th</p>
        <hr className="my-[1.5rem]" />
        <div className="flex justify-between gap-2 items-center">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-base">Delivery Charges</p>
            <p className="font-regular text-gray-1 text-base">
              Additional Fees may apply
            </p>
          </div>

          <p className="font-bold text-base">$5.00</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethodOption;
