import NavIndicator from "@/components/nav_indicator/NavIndicator";
import Navbar from "@/components/navigations/Navbar";
import Title from "@/components/title/Title";
import BillingForm from "./components/BillingForm";
import Button from "@/components/button/Button";
import ProductSummary from "./components/ProductSummary";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="xl:container my-[1rem] p-5">
        <NavIndicator indicators={["Home", "My Account", "Checkout"]} />
      </div>
      <section className="xl:container font-sans px-5">
        <Title>Check Out</Title>
        <h2 className="lg:text-xl md:text-lg text-md font-bold text-primary my-4">
          Billing details
        </h2>
      </section>

      <div className="xl:container grid lg:grid-cols-2 gap-4 px-5 mt-[2rem]">
        <form className="">
          <BillingForm />
          <div className="flex flex-col gap-6 my-[2rem]">
            <Button
              variant={"filled"}
              size={"sm"}
              type={"submit"}
              classname="text-xs"
            >
              Continue to delivery
            </Button>
            <div className="flex gap-2 text-primary font-sans">
              <input
                type="checkbox"
                name="Save my information for a faster checkout"
                id="information"
                className="p-1"
              />
              <label htmlFor="information save checkbox">
                Save my information for a faster checkout
              </label>
            </div>
          </div>
        </form>
        <ProductSummary />
      </div>
    </>
  );
};

export default Checkout;
