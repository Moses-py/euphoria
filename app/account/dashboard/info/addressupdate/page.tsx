import AddressForm from "./components/AddressForm";

const UodateAddress = () => {
  return (
    <div className="px-5 mt-5 lg:mt-0 flex-1">
      <h2 className="md:text-2xl sm:text-xl text-lg text-primary font-[600] font-serif tracking-wide">
        My Info
      </h2>
      <h3 className="md:text-xl text-md text-primary font-serif font-[600]">
        Add Address
      </h3>
      <div className="mt-[2rem]">
        <AddressForm />
      </div>
    </div>
  );
};

export default UodateAddress;
