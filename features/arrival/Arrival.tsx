"use client";
import ArrivalCard from "@/features/arrival/components/arrivalCard/ArrivalCard";
import Title from "@/components/title/Title";

const arrivalData = [
  { name: "Knitted Joggers", img: "arrival_1" },
  { name: "Full Sleeve", img: "arrival_2" },
  { name: "Active T-shirts", img: "arrival_3" },
  { name: "Urban Tops", img: "arrival_4" },
];

const Arrival = () => {
  return (
    <section className="mt-[5rem] p-5">
      <div className="sm:container">
        <Title>New Arrivals</Title>
        {/* Picture list */}
        <div className="flex my-[2rem] md:my-[3rem] gap-5 px-6 overflow-x-auto">
          {arrivalData.map((data, index) => {
            return <ArrivalCard key={index} img={data.img} name={data.name} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Arrival;
