import Title from "@/components/title/Title";
import Image from "next/image";
import SavingZoneCard, { ZoneCardProps } from "./components/SavingZoneCard";
import Link from "next/link";

const zoneData: ZoneCardProps[] = [
  {
    orientation: "portrait",
    img: "zone_1",
    title: "Hawaiian shirts",
    subtitle: "Dress up in summer vibe",
    textDirection: "left",
    discount: "50",
    color: "regular",
  },
  {
    orientation: "portrait",
    img: "zone_2",
    title: "Printed T-shirts",
    subtitle: "New design every week",
    textDirection: "right",
    discount: "40",
    color: "regular",
  },
  {
    orientation: "portrait",
    img: "zone_3",
    title: "Cargo Joggers",
    subtitle: "Move with style and comfort",
    textDirection: "right",
    discount: "50",
    color: "black",
  },
  {
    orientation: "landscape",
    img: "zone_4",
    title: "Urban shirts",
    subtitle: "Live in comfort",
    textDirection: "right",
    discount: "60",
    color: "black",
  },
  {
    orientation: "landscape",
    img: "zone_5",
    title: "Oversized T-shirts",
    subtitle: "Street style icon",
    textDirection: "right",
    discount: "60",
    color: "black",
  },
];
const SavingZone = () => {
  return (
    <section className="p-5 w-full">
      <div className="sm:container w-full">
        <Title>Big savings zone</Title>
        <div className="my-[3rem] w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {zoneData.slice(0, 3).map((data, index) => {
              return (
                <SavingZoneCard
                  key={index}
                  orientation={data.orientation}
                  img={data.img}
                  title={data.title}
                  subtitle={data.subtitle}
                  discount={data.discount}
                  color={data.color}
                  textDirection={data.textDirection}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-[2rem]">
            {zoneData.slice(3, 5).map((data, index) => {
              return (
                <SavingZoneCard
                  key={index}
                  orientation={data.orientation}
                  img={data.img}
                  title={data.title}
                  subtitle={data.subtitle}
                  discount={data.discount}
                  color={data.color}
                  textDirection={data.textDirection}
                />
              );
            })}
          </div>
        </div>
        {/* Squares */}
        <div className="grid lg:grid-cols-2">
          <div className="relative rounded-tl-lg rounded-bl-lg">
            <Image
              src={"/figma/savings_zone/zone_6.jpg"}
              alt={"zone_6"}
              width={400}
              height={400}
              className="w-full h-full object-contain rounded-tl-lg rounded-bl-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center font-sans px-[1rem] xs:px-[2rem] lg:px-[5rem] text-light z-30">
              <div className="flex flex-col gap-4">
                <h1 className="xl:text-3xl md:text-2xl sm:text-xl text-lg font-bold uppercase">
                  We make your everyday fashion better!
                </h1>
                <p className="text-base sm:text-md md:text-lg font-regular">
                  In our journey to improve everyday fashion, euphoria presents
                  EVERYDAY wear range - Comfortable & Affordable fashion 24/7
                </p>
                <button className="bg-light rounded-md px-[1rem] xs:px-[2rem] py-[0.5rem] text-black w-fit">
                  <Link href="/shop">Shop now</Link>
                </button>
              </div>
            </div>
            <div className="absolute inset-0 z-20 bg-black opacity-50 rounded-tl-lg rounded-bl-lg" />
          </div>
          <Image
            src={"/figma/savings_zone/zone_7.jpg"}
            alt={"zone_7"}
            width={400}
            height={400}
            className="hidden lg:block w-full h-full object-contain rounded-tr-lg rounded-br-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SavingZone;
