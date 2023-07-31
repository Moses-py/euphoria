import H2 from "@/components/typography/H2";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="mt-[5rem] p-5">
      <div className="grid sm:grid-cols-2 gap-6 sm:container">
        <div className="relative h-full w-full">
          <Image
            src={"/figma/card_1.jpg"}
            alt={""}
            width={600}
            height={350}
            className="w-full object-contain rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end items-center py-5 px-[1.5rem]">
            <div className="flex flex-col gap-1 sm:gap-3 text-right text-light font-serif">
              <p className="text-md lg:text-lg xl:text-xl font-semibold">
                Low price
              </p>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-extrabold">
                High Coziness
              </h2>
              <p className="text-md lg:text-lg xl:text-xl font-semibold font-sans">
                Up to 50% off
              </p>
              <Link
                href="/"
                className="text-md lg:text-lg xl:text-xl font-semibold underline mt-3"
              >
                Explore items
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src={"/figma/card_2.jpg"}
            alt={""}
            width={600}
            height={350}
            className="w-full object-contain rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-start items-center py-5 px-[1.5rem]">
            <div className="flex flex-col gap-1 sm:gap-3 text-left text-light font-serif">
              <p className="text-md lg:text-lg xl:text-xl font-semibold">
                Euphoria presents
              </p>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-extrabold leading-tight">
                Breezy summer
              </h2>
              <p className="text-md lg:text-lg xl:text-xl font-semibold font-sans">
                Up to 50% off
              </p>
              <Link
                href="/"
                className="text-md lg:text-lg xl:text-xl font-semibold underline mt-3"
              >
                Explore items
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
