import Image from "next/image";

interface NavIndicatorProps {
  indicators: string[];
}

const NavIndicator = ({ indicators }: NavIndicatorProps) => {
  return (
    <>
      <div className=" text-gray-1 font-sans text-md flex gap-1">
        {indicators.map((indicator, index) => {
          return (
            <>
              {index === indicators.length - 1 ? (
                <p className="font-semibold" key={index + "-key"}>
                  {indicator}
                </p>
              ) : (
                <div key={index} className="flex gap-1">
                  <p className="font-light">{indicator}</p>
                  <Image
                    src={"/icons/right.png"}
                    alt="right icon"
                    width={20}
                    height={10}
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default NavIndicator;
