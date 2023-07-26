import BrandCard from "./components/BrandCard";

const brands = ["brand1", "brand2", "brand3", "brand4"];
const Brand = () => {
  return (
    <section className="my-[5rem] p-5">
      <div className="container grid place-items-center w-full bg-primary py-[3rem] px-5 rounded-xl">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h1 className="xl:text-5xl md:text-3xl sm:text-2xl text-xl font-[800] text-light font-serif tracking-wide">
            Top Brands Deal
          </h1>
          <p className="text-lg font-sans text-light">
            Up to <span className="text-yellow-600">60%</span> of on brands
          </p>
          <div className="grid xl:grid-cols-4 grid-cols-2 items-center gap-5">
            {brands.map((brand, index) => {
              return <BrandCard key={index} brand={brand} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
