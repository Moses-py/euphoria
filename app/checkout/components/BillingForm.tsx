"use client";
import CountrySelect from "@/components/input/CountrySelect";
import Input from "@/components/input/Input";
import StateSelect from "@/components/input/StateSelect";
import { country_list } from "@/mocks/countries";
import { useStore } from "@/store/Store";
import { ChangeEvent, useState } from "react";

const BillingForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    country_list[0].country
  );

  const [user] = useStore((state) => [state.user]);

  const defaultUserAddress = user?.address?.find(
    (address) => (address.role = "default")
  );

  return (
    <>
      <div className="grid gap-5 mb-[1rem]">
        <Input
          label={"Name"}
          required={true}
          placeholder={"Name"}
          type={"text"}
          variant={"input"}
          value={user.name}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-[2rem]">
        <CountrySelect
          label={"Country/Region"}
          required={true}
          onchange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSelectedCountry(e.target.value)
          }
          value={defaultUserAddress?.addressData.country}
        />
        <StateSelect
          label={"State"}
          required={true}
          selectedCountry={defaultUserAddress?.addressData.country}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-[1rem]">
        <Input
          label={"Street address"}
          required={true}
          placeholder={"Street address"}
          type={"text"}
          variant={"input"}
          value={defaultUserAddress?.addressData.streetname}
        />
        <Input
          label={"Apt, Suite, unit"}
          required={true}
          placeholder={"Apt, Suite, unit"}
          type={"text"}
          variant={"input"}
          value={defaultUserAddress?.addressData.streetNumber}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-[1rem]">
        <Input
          label={"City"}
          required={true}
          placeholder={"City"}
          type={"text"}
          variant={"input"}
          value={defaultUserAddress?.addressData.city}
        />

        <Input
          label={"Zip code"}
          required={true}
          placeholder={"Zip code"}
          type={"text"}
          variant={"input"}
          value={defaultUserAddress?.addressData.zipcode}
        />
      </div>
      <div className="grid gap-5 mb-[1rem]">
        <Input
          label={"Phone number"}
          required={true}
          placeholder={"Phone number"}
          type={"text"}
          variant={"input"}
          value={user.phonenumber}
        />
      </div>
    </>
  );
};

export default BillingForm;
