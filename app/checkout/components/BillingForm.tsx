"use client";
import CountrySelect from "@/components/input/CountrySelect";
import Input from "@/components/input/Input";
import StateSelect from "@/components/input/StateSelect";
import { country_list } from "@/mocks/countries";
import { ChangeEvent, useState } from "react";

const BillingForm = () => {
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
      <div className="grid gap-5 mb-[1rem]">
        <Input
          label={"Phone number"}
          required={true}
          placeholder={"Phone number"}
          type={"text"}
          variant={"input"}
        />
      </div>
    </>
  );
};

export default BillingForm;
