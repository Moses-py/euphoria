"use client";
import { country_list } from "@/mocks/countries";
import { useEffect, useState } from "react";

interface StateSelectProps {
  label: string;
  required: boolean;
  selectedCountry: string | undefined;
  value?: string;
  disabled?: boolean;
}

const StateSelect = ({
  label,
  required,
  selectedCountry,
  value,
  disabled,
}: StateSelectProps) => {
  const [selectedCountryStates, setSelectedCountryStates] = useState<
    string[] | undefined
  >();

  useEffect(() => {
    const stateList = country_list.find((country: Country) => {
      return country.country === selectedCountry;
    });
    setSelectedCountryStates(stateList?.states);
  }, [selectedCountry]);

  return (
    <>
      {selectedCountryStates?.length === 0 ? null : (
        <div className="flex flex-col gap-1 font-sans text-primary">
          <label htmlFor={label} className="font-semibold text-sm">
            {label} {required && <span className="text-red-600">*</span>}
          </label>
          <select
            value={value}
            disabled={disabled}
            required
            className={` p-3 ring-1 ring-gray-3 text-gray-1 rounded-md focus:ring-1 focus:ring-gray-2 outline-none bg-light placeholder:text-gray-2 w-full`}
          >
            {selectedCountryStates?.map((state, index) => {
              return (
                <option value="" className="text-gray-1" key={index}>
                  {state}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </>
  );
};

export default StateSelect;
