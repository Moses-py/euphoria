"use client";
import { useStore } from "@/store/Store";
import Catalog from "./catalog/Catalog";
import Filter from "./filters/Filter";

const Shopboard = () => {
  const [filterToggle] = useStore((state) => [state.filterToggle]);
  return (
    <section className="">
      <p
        className="px-4 py-2 border lg:hidden block w-fit float-right"
        onClick={filterToggle}
      >
        Filter
      </p>
      <div className="flex relative">
        <Filter />
        <Catalog />
      </div>
    </section>
  );
};

export default Shopboard;
