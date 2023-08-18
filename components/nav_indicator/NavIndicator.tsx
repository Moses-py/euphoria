import Image from "next/image";

interface NavIndicatorProps {
  indicators: string[];
}

const NavIndicator = ({ indicators }: NavIndicatorProps) => {
  return (
    <>
      <div className="flex text-gray-1 font-sans text-md gap-1">
        {indicators.map((indicator, index) => {
          return (
            <div key={index}>
              {index === indicators.length - 1 ? (
                <p className="font-normal sm:text-base text-xs">{indicator}</p>
              ) : (
                <div className="flex gap-1">
                  <p className="font-normal sm:text-base text-xs">
                    {indicator}
                  </p>
                  <Image
                    src={"/icons/right.png"}
                    alt="right icon"
                    width={20}
                    height={10}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavIndicator;
