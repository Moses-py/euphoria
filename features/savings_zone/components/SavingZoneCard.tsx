import Image from "next/image";
import Link from "next/link";

export interface ZoneCardProps {
  orientation: Orientation;
  img: string;
  title: string;
  subtitle: string;
  textDirection: Direction;
  discount: string;
  color: TextColor;
}
type Direction = "left" | "right";
type Orientation = "portrait" | "landscape";
type TextColor = "black" | "light";

const SavingZoneCard: React.FC<ZoneCardProps> = ({
  orientation,
  img,
  title,
  subtitle,
  textDirection,
  discount,
  color,
}) => {
  return (
    <>
      {orientation === "landscape" && (
        <>
          <div className={` relative w-full h-full`}>
            <Image
              src={`/figma/savings_zone/${img}.jpg`}
              alt={img}
              width={400}
              height={393}
              className={`w-full h-[393px] md:h-[500px]  object-cover rounded-lg`}
            />
            <div
              className={`absolute inset-0 ${
                textDirection === "left" ? "justify-start" : "justify-end"
              } flex items-center px-[1.5rem] font-sans`}
            >
              <div
                className={`flex flex-col gap-1 sm:gap-3 text-${textDirection} text-${color} font-serif`}
              >
                <h2 className="text-xl md:text-2xl xl:text-3xl font-normal font-sans">
                  {title}
                </h2>
                <p className="text-sm lg:text-md font-light">{subtitle}</p>
                <p className="text-md lg:text-lg xl:text-xl font-bold font-sans">
                  Flat {discount}% off
                </p>
                <Link
                  href="/"
                  className="text-md lg:text-lg xl:text-xl font-bold underline mt-3"
                >
                  <button
                    className={`rounded-sm px-[2rem] py-[0.5rem] border ${
                      color === "light" ? "border-light" : "border-black"
                    } hover:shadow-xl text-sm font-light`}
                  >
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      {orientation === "portrait" && (
        <>
          <div className={` relative w-full h-full`}>
            <Image
              src={`/figma/savings_zone/${img}.jpg`}
              alt={img}
              width={600}
              height={450}
              className={`w-full h-full rounded-lg`}
            />
            <div
              className={`absolute inset-0 ${
                textDirection === "left" ? "justify-start" : "justify-end"
              } flex items-center px-[1.5rem] font-sans`}
            >
              <div
                className={`flex flex-col gap-1 sm:gap-3 text-${textDirection} text-${color} font-serif`}
              >
                <h2 className="text-lg md:text-2xl xl:text-3xl font-normal font-sans">
                  {title}
                </h2>
                <p className="text-sm lg:text-md font-light">{subtitle}</p>
                <p className="text-base lg:text-lg xl:text-xl font-bold font-sans">
                  Up to {discount}% off
                </p>
                <Link
                  href="/"
                  className="text-md lg:text-lg xl:text-xl font-bold underline mt-3"
                >
                  <button
                    className={`rounded-sm px-[2rem] py-[0.5rem] border ${
                      color === "light" ? "border-light" : "border-black"
                    } hover:shadow-xl text-sm font-light`}
                  >
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SavingZoneCard;
