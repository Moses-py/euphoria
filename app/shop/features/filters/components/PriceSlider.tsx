"use client";

import { useState } from "react";
const PriceRangeSlider: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(parseInt(event.target.value));
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseInt(event.target.value));
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label
          htmlFor="minPrice"
          className="block text-base font-semibold text-primary font-sans"
        >
          Min Price: ${minPrice}
        </label>
        <input
          type="range"
          name="minPrice"
          id="minPrice"
          min="0"
          max="1000"
          step="1"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="w-full mt-1 bg-secondary appearance-none h-1 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="maxPrice"
          className="block text-base font-semibold text-primary font-sans"
        >
          Max Price: ${maxPrice}
        </label>
        <input
          type="range"
          name="maxPrice"
          id="maxPrice"
          min="0"
          max="1000"
          step="1"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="w-full mt-1 bg-secondary appearance-none h-1 rounded-md"
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
