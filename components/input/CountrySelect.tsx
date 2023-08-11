import { country_list } from "@/mocks/countries";
import { ChangeEvent } from "react";

interface CountrySelectProps {
  label: string;
  required: boolean;
  onchange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const CountrySelect = ({ label, required, onchange }: CountrySelectProps) => {
  return (
    <div className="flex flex-col gap-1 font-sans text-primary">
      <label htmlFor={label} className="font-semibold text-sm">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <select
        onChange={onchange}
        className={` p-3 ring-1 ring-gray-3 text-gray-1 rounded-md focus:ring-1 focus:ring-gray-2 outline-none bg-light placeholder:text-gray-2 w-full`}
      >
        {country_list.map((country, index) => {
          return (
            <option
              value={country.country}
              className="text-gray-1 py-5"
              key={index}
            >
              {country.country}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CountrySelect;
