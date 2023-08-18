"use client";
import Button from "@/components/button/Button";
import CountrySelect from "@/components/input/CountrySelect";
import Input from "@/components/input/Input";
import StateSelect from "@/components/input/StateSelect";
import { country_list } from "@/mocks/countries";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const AddressForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    country_list[0].country
  );

  return (
    <>
      <div className="grid md:grid-cols-2 gap-5 mb-[1rem]">
        <Input
          label={"First name"}
          required={true}
          placeholder={"First name"}
          type={"text"}
          variant={"input"}
        />
        <Input
          label={"Last name"}
          required={true}
          placeholder={"Last name"}
          type={"text"}
          variant={"input"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-[2rem]">
        <CountrySelect
          label={"Country/Region"}
          required={true}
          onchange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSelectedCountry(e.target.value)
          }
        />
        <Input
          label={"Company (Optional)"}
          required={false}
          placeholder={"Company (Optional)"}
          type={"text"}
          variant={"input"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-[1rem]">
        <Input
          label={"Street address"}
          required={true}
          placeholder={"Street address"}
          type={"text"}
          variant={"input"}
        />
        <Input
          label={"Apt, Suite, unit"}
          required={true}
          placeholder={"Apt, Suite, unit"}
          type={"text"}
          variant={"input"}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mb-[1rem]">
        <Input
          label={"City"}
          required={true}
          placeholder={"City"}
          type={"text"}
          variant={"input"}
        />
        <StateSelect
          label={"State"}
          required={true}
          selectedCountry={selectedCountry}
        />
        <Input
          label={"Zip code"}
          required={true}
          placeholder={"Zip code"}
          type={"text"}
          variant={"input"}
        />
      </div>
      <div className="grid mb-[1rem]">
        <Input
          label={"Phone number"}
          required={true}
          placeholder={"Phone number"}
          type={"text"}
          variant={"input"}
        />
      </div>
      <div className="w-full mt-[2rem]">
        <Input
          label={"Delivery instructions"}
          required={false}
          placeholder={"Delivery instructions"}
          variant={"textarea"}
        />
      </div>
      <div className="flex flex-col gap-3 mt-[2rem]">
        <div className="flex gap-3">
          <input type="checkbox" name="billing" />
          <label htmlFor="billing">Set as default Billing address</label>
        </div>
        <div className="flex gap-3">
          <input type="checkbox" name="shipping" />
          <label htmlFor="shipping">Set as default Shipping address</label>
        </div>
      </div>
      <div className="flex gap-4 mt-[2rem]">
        <Button variant={"filled"} size={"sm"} type={"submit"}>
          Save
        </Button>
        <Link href="/account/dashboard/info">
          <Button
            variant={"outline"}
            size={"sm"}
            type={"button"}
            classname="hover:bg-gray-3 hover:text-primary ring-gray-2"
          >
            Cancel
          </Button>
        </Link>
      </div>
    </>
  );
};

export default AddressForm;
